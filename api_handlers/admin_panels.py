from os import environ

from app_init import (
    ParsedRequest,
    UserTable,
    get_current_user,
    is_logged_in,
    Questions,
    db,
)
from constants import DENIED, SUCCESS
from database import delete_from_db, query_all, save_to_db, add_to_db
from util import map_to_list, safe_int, validate_email_address
from sqlalchemy import func
from .common import (
    get_user_by_id,
    get_ques_by_id,
    post_level_up_webhook,
    get_log_from_file_system,
    clean_logs,
    merge_logs,
)
from .user_manager import add_user
from json import dumps
from response_caching import cache
from os import getpid

pid = getpid()

ADMIN_TOKEN_OS = environ.get("ADMIN_TOKEN")
# pylint: disable=E1101
def get_latest_q_level() -> int:
    t = func.max(Questions.question_level)
    curr = db.session.query(t).first()[0]
    return curr


def get_next_q_level() -> int:
    t = get_latest_q_level()
    return t + 1 if t is not None else 0


def get_all_questions():
    return map_to_list(
        get_question_data, Questions.query.order_by(Questions.question_level).all()
    )


@cache(lambda: f"{pid}_user_cache.admin")
def get_all_users():
    return map_to_list(lambda x: x.as_json, query_all(UserTable))


# pylint: enable=E1101


def get_question_data(x: Questions):
    js = x.as_json
    js["answer"] = x.answer
    return js


def is_not_admin(idx: str) -> bool:
    return not get_user_by_id(idx).is_admin


def set_level(user: UserTable, level_to_set):
    level_to_set = safe_int(level_to_set)
    user.current_level = level_to_set
    save_to_db()
    return SUCCESS


def set_last_question_answered_at(user: UserTable, tstamp):
    ts = safe_int(tstamp)
    user.last_question_answered_at = ts
    save_to_db()
    return SUCCESS


def delete_user(user: UserTable):
    delete_from_db(user)
    return SUCCESS


def disqualify(user: UserTable):
    user.is_disqualified = True
    save_to_db()
    return {"user_data": user.as_json}


def requalify(user: UserTable):
    user.is_disqualified = False
    save_to_db()
    return {"user_data": user.as_json}


def create_admin_account(data: ParsedRequest):

    js = data.json
    if not "token" in js:
        return {"error": "NO"}
    admin_token = js.pop("token")
    js["is_admin"] = True
    if admin_token == ADMIN_TOKEN_OS:
        return add_user(js)
    return {"error": "no"}


def add_question(js: dict) -> dict:
    q_level: int = get_next_q_level()
    question_dict: dict = js.get("question", {})
    question = question_dict.get("value", "").strip()
    question_dict["value"] = question
    hint: str = js.get("hint")
    answer: str = js.get("answer", "").strip()
    spec_data: dict = js.get("special")
    if not question or not answer:
        return {"error": "Question and answer can't be blank"}
    entry = Questions(q_level, question, answer, hint, spec_data)
    add_to_db(entry)
    return entry.as_json


def edit_question(js: dict) -> dict:
    num: int = js.get("question_level")
    qs = get_ques_by_id(num)
    qs.question = dumps(js.get("question", qs.question))
    qs.answer = js.get("answer", qs.answer)
    qs.hint = dumps(js.get("hint", qs.hint))
    qs.special = dumps(js.get("special", qs.special))
    save_to_db()
    return qs.as_json


def convert_to_admin_account(js: dict) -> dict:
    user = js.get("user")
    token = js.get("token")
    if token != ADMIN_TOKEN_OS:
        return {"error": "No"}
    u = get_user_by_id(user)
    if not u:
        return {"error": "User does not exist"}
    u.is_admin = True
    save_to_db()
    return u.as_json


sentinel = object()


def admin_edit_user(utable, js):
    field = js.get("field", "").strip()
    new_value = js.get("new_value", "").strip()
    prev_value = getattr(utable, field, sentinel)
    if prev_value == sentinel:
        return {"error": "??????"}

    if prev_value == new_value:
        return {"user_data": utable.as_json}
    if field == "current_level":
        set_level(utable, new_value)
        return {"user_data": utable.as_json}
    elif field == "last_question_answered_at":
        set_last_question_answered_at(utable, new_value)
        return {"user_data": utable.as_json}
    elif field == "email":
        if not validate_email_address(new_value):
            return {"error": "Invalid email"}
        utable.has_verified_email = False
    try:
        setattr(utable, field, new_value)
        save_to_db()
        return {"user_data": utable.as_json}
    except Exception:
        return {
            "error": "Could not update"
            if field != "email"
            else "Could not update email, maybe another account is using that address"
        }


def handler(data: ParsedRequest) -> dict:
    action = data.action
    if action == "create-admin-account":
        return create_admin_account(data)
    curr = get_current_user()
    if not curr or is_not_admin(curr):
        return (
            {"error": "You do not have the permissions to access this content"},
            DENIED,
        )
    if action == "get-logs":
        return get_log_from_file_system()
    if action == "clear-logs":
        clean_logs()
        return None
    if action == "merge-logs":
        merge_logs(data.json)
        return SUCCESS
    if action == "get-users":
        return get_all_users()
    if action == "get-questions":
        return get_all_questions()
    if action == "add-question":
        return add_question(data.json)
    if action == "get-latest-question-number":
        q = get_latest_q_level()
        qid = get_ques_by_id(q)
        return {
            "question_number": q,
            "question_data": qid.as_json if qid is not None else qid,
        }
    if action == "edit-question":
        return edit_question(data.json)
    if not data.json:
        return {"error": "Invalid"}
    # if action == "elevate-status":
    #     return convert_to_admin_account(data.json)
    user = get_user_by_id(data.json.get("user"))
    post_level_up_webhook(
        f"'{curr}' performed an admin action ({action} on {user.user})"
    )
    if action == "__edit__":
        return admin_edit_user(user, data.json)
    if action == "delete-user":
        return delete_user(user)
    if action == "disqualify":
        return disqualify(user)
    if action == "requalify":
        return requalify(user)
