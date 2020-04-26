from app_init import (
    UserTable,
    ParsedRequest,
    is_logged_in,
    get_current_user,
    EphermalTokenStore,
)
from database import add_to_db, delete_from_db
from constants import BAD_REQUEST, NOT_FOUND, DENIED, IS_LOGGED_IN, USER_ID
from util import validate_email_address, sanitize
import passlib.hash as pwhash
from .common import get_user_by_id, get_token_store_by_token
from psycopg2 import IntegrityError
from .email_manager import send_email_to_user


def check_password_hash(_hash, pw):
    meth = pwhash.pbkdf2_sha512
    return meth.verify(pw, _hash)


def generate_password_hash(pw):
    meth = pwhash.pbkdf2_sha512
    return meth.hash(pw)


def get_user_details(
    idx: str, get_authenticated_data: bool, get_class_instance: bool = False
) -> dict:
    data: UserTable = get_user_by_id(idx)
    if get_authenticated_data and get_class_instance:
        return data

    if data:
        ret = data.as_json
        if data.user == get_current_user() and get_authenticated_data:
            return ret
        else:
            ret.pop("secure_data")
            return ret
    return None


def add_user(data: dict):
    invalid = is_invalid_data(data)
    if invalid:
        return {"error": "Could not create account", "reason": invalid}, BAD_REQUEST
    user = data["user"].strip().lower()
    if sanitize(user) != user:
        return {
            "error": "Could not create account",
            "reason": "username contains invalid character(s)",
        }
    if len(user) < 3 or len(user) > 30:
        return {"error": "Could not create account", "reason": "username length"}
    password = data.pop("password")
    if len(password) < 5:
        return {
            "errpr": "Could not create account",
            "reason": "password length too short",
        }
    pw_hash = generate_password_hash(password)
    data["password_hash"] = pw_hash
    data["user"] = user
    try:
        user = UserTable(**data)
        add_to_db(user)
        return user.as_json
    except Exception as e:
        if isinstance(getattr(e, "orig", 0), IntegrityError):
            return {"error": "User exists"}
        print(e)
        return {"error": "Could not create account"}


def is_invalid_data(data: dict):
    reasons = []
    required_attrs = ["name", "user", "email", "password"]
    for i in required_attrs:
        if not i in data:
            reasons.append(i)
    if reasons:
        return {"missing_info": reasons}, BAD_REQUEST
    return False


def authenticate(data: dict):
    user = data.get("user")
    password = data.get("password")
    if not user or not password:
        return {"error": f"Invalid {'user' if not user else 'password'}"}, BAD_REQUEST
    user_details: UserTable = get_user_details(user, True, get_class_instance=True)
    if user_details is None:
        return {"error": "User does not exist"}, NOT_FOUND
    pw_hash = user_details.password_hash
    if check_password_hash(pw_hash, password):

        return (
            {"success": "logged_in", "user_data": user_details.as_json},
            {"cookies": {IS_LOGGED_IN: True, USER_ID: user_details.user}},
        )
    else:
        return {"error": "Wrong password"}, {**DENIED, "cookies": {IS_LOGGED_IN: False}}


def edit(js: dict) -> dict:
    return {"error": "not implemented"}


def forgot_password(js: dict) -> dict:
    user = js.get("user")
    new_token = EphermalTokenStore("forgot_password", user)
    utable = get_user_by_id(user)
    if not utable:
        return {"error": "User does not exist"}
    add_to_db(new_token)
    send_email_to_user(
        utable.email,
        "Reset Password - Halocrypt",
        f"Your one time password reset token is - {new_token.token_string}",
    )
    return {"success": "Email Sent"}


def check_password_token(js: dict) -> dict:
    get = js.get
    token = get("token")
    new_password = get("new_password")
    if len(new_password) < 5:
        return {"error": "Password too short"}
    store = get_token_store_by_token(token)
    if store:
        if store.is_expired:
            delete_from_db(store)
            return {"error": "Token Expired"}
        user = store.token_user
        user_table = get_user_by_id(user)
        if store.token_type != "forgot_password":
            return {"error": "Invalid Token"}
        user_table.password_hash = generate_password_hash(new_password)
        delete_from_db(store)
        return {"success": "Password changed"}
    return {"error": "Invalid Token"}


def send_verification_email(js: dict) -> dict:
    user = js.get("user")
    new_token = EphermalTokenStore("email_verify", user)
    add_to_db(new_token)
    send_email_to_user(
        get_user_by_id(user).email,
        "Verify Email address - Halocrypt",
        f"Your Verification Code is - {new_token.token_string}",
    )
    return {"success": "Email Sent"}


def check_email_token(js: dict) -> dict:
    token = js.get("token")
    store = get_token_store_by_token(token)
    if store:
        if store.is_expired:
            delete_from_db(store)
            return {"error": "Token Expired"}
        user = store.token_user
        user_table = get_user_by_id(user)
        user_table.has_verified_email = True
        delete_from_db(store)
        return {"success": "Email Verified"}
    return {"error": "Invalid Token"}


def handler(data: ParsedRequest):
    action = data.action
    if action == "get-user-details":
        return get_user_details(data.args.get("id"), is_logged_in())
    if action == "add-user" or action == "create":
        return add_user(data.json)
    if action == "authenticate":
        return authenticate(data.json)
    if action == "edit":
        return edit(data.json)
    if action == "forgot-password":
        return forgot_password(data.json)
    if action == "check-password-token":
        return check_password_token(data.json)
    if action == "verify-email":
        return send_verification_email(data.json)
    if action == "check-email-token":
        return check_email_token(data.json)
    if action == "check-auth":
        logged_in = is_logged_in()
        user_details = None
        if logged_in:
            user_details = get_user_by_id(get_current_user()).as_json
        return {"is_logged_in": bool(logged_in), "user_data": user_details}
