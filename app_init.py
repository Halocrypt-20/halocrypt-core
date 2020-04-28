from enum import Enum
from json import dumps, loads
from os import environ
from secrets import token_hex

from flask_sqlalchemy import SQLAlchemy
from flask import Flask, Response, request, session, redirect
from flask.sessions import SecureCookieSessionInterface

# from secure import SecureCookie

from constants import IS_LOGGED_IN, USER_ID, THREE_HOURS_JS_TIME
from set_env import setup_env
from util import (
    validate_email_address,
    is_prod,
    get_host,
    sanitize,
    js_time,
    get_client_ip,
)
from rate_limit_manager import check_rate_limit

setup_env()

app = Flask(__name__)
app.secret_key = environ.get("secret-key", token_hex(10))

cookie_sess = SecureCookieSessionInterface()
_cookie_serializer = cookie_sess.get_signing_serializer(app)

database_url: str = environ.get("DATABASE_URL")
app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


# get current cookies
def get_session(r=None):
    r = r or request
    cookies = r.cookies.get(app.session_cookie_name)
    if cookies:
        c = _cookie_serializer.loads(cookies)
        return c
    return {}


# set current cookies
def set_cookies(resp: Response, cookies):
    cookie_name = app.session_cookie_name
    value = _cookie_serializer.dumps(dict(cookies))
    cookie_val = f"{value}; Path=/; Secure; HttpOnly; SameSite=None"
    resp.headers["Set-Cookie"] = f"{cookie_name}={cookie_val}"


# does the user have login cookie?
def is_logged_in() -> bool:
    sess = get_session(request)
    return sess.get(IS_LOGGED_IN)


# get current user from session
def get_current_user():
    sess = get_session(request)
    return (sess.get(IS_LOGGED_IN) and sess.get(USER_ID)) or None


# json response helper
def json_response(data: dict, status=200, headers=None, cookies=None) -> Response:
    dump = dumps(data)
    resp = Response(dump, status, headers, content_type="application/json")
    if cookies:
        if is_prod(request):
            sess = get_session(request)
            sess.update(cookies)
            set_cookies(resp, sess)
        else:
            # dev environment, do a quick setup
            for k, v in cookies.items():
                session[k] = v
    return resp


def clear_data():
    resp = Response(dumps({"success": True}), content_type="application/json")
    if is_prod(request):
        set_cookies(resp, {})
    else:
        session.clear()
    return resp


@app.before_request
def enforce_https():
    hs = get_host(request)
    if (
        not request.is_secure
        and not "127.0.0.1" in hs
        and not "localhost" in hs
        and request.url.startswith("http://")
    ):
        rd = request.url.replace("http://", "https://")
        return redirect(rd, code=301)
    return check_rate_limit(request)


# make sure our responses are only API calls
@app.after_request
def resp_headers(resp):
    # if not is_prod(request):
    resp.headers["access-control-allow-origin"] = get_host(request)
    # else:
    #     resp.headers["access-control-allow-origin"] = "https://halocrypt.com"
    resp.headers["Access-Control-Allow-Headers"] = request.headers.get(
        "Access-Control-Request-Headers", "*"
    )
    resp.headers["access-control-allow-credentials"] = "true"
    return resp


# database


class UserTable(db.Model):
    # pylint: disable=E1101
    user = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    school = db.Column(db.String)
    ig_user_id = db.Column(db.String)
    password_hash = db.Column(db.String)
    current_level = db.Column(db.Integer, nullable=False)
    is_admin = db.Column(db.Boolean)
    is_disqualified = db.Column(db.Boolean)
    last_question_answered_at = db.Column(db.BigInteger)
    has_verified_email = db.Column(db.Boolean)
    # pylint: enable=E1101
    def __init__(
        self,
        user: str = None,
        name: str = None,
        email: str = None,
        school: str = None,
        password_hash: str = None,
        ig_user_id: str = None,
        is_admin: bool = False,
        is_disqualified: bool = False,
        last_question_answered_at: int = 0,
        has_verified_email: bool = False,
    ):
        if any(self.is_invalid_data(x) for x in (user, name, email, password_hash)):
            raise Exception("Invalid Data")
        self.user = user.lower()
        self.password_hash = password_hash
        self.name = name
        self.email = validate_email_address(email)
        self.school = school
        self.ig_user_id = ig_user_id
        self.current_level = 0
        self.is_admin = is_admin
        self.is_disqualified = is_disqualified
        self.has_verified_email = has_verified_email
        self.last_question_answered_at = (
            last_question_answered_at or js_time()
        )  # javascript times in ms

    def is_invalid_data(self, data):
        return not isinstance(data, str) or not (data or "").strip()

    def __gt__(self, a):
        if not isinstance(a, UserTable):
            raise Exception("Invalid operation")
        a: UserTable
        question_level_self = self.current_level
        question_level_other = a.current_level

        if question_level_other == question_level_self:
            time_stamp_self = self.last_question_answered_at
            time_stamp_other = a.last_question_answered_at
            if time_stamp_self == time_stamp_other:
                print(self, a)
                return self.user > a.user  # Someone's probably messing
            return time_stamp_self < time_stamp_other  # who answered earlier
        return question_level_self > question_level_other

    @property
    def as_json(self):
        return {
            "id": self.user,
            "current_level": self.current_level,
            "is_admin": self.is_admin,
            "is_disqualified": self.is_disqualified,
            "last_question_answered_at": self.last_question_answered_at,
            "name": self.name,  # for debug purp
            "has_verified_email": self.has_verified_email,
            "secure_data": {
                "email": self.email,
                "school": self.school,
                "ig_user_id": self.ig_user_id or None,
            },
        }

    def __repr__(self):
        return "<USER:%r>" % self.user


"""
The Ephermal token store.
We will temporarily store all the email verification and forgot password tokens right here.
"""


class EphermalTokenStore(db.Model):
    # pylint: disable=E1101
    token_type = db.Column(db.String)
    token_string = db.Column(db.String, primary_key=True)
    token_generated_at = db.Column(db.BigInteger)
    token_user = db.Column(db.String)
    # pylint: disable=E1101
    def __init__(self, token_type: str, token_for: str):
        if token_type not in ["email_verify", "forgot_password"]:
            raise Exception("Token not of expected type")
        self.token_generated_at = js_time()
        self.token_user = token_for
        self.token_type = token_type
        self.token_string = token_hex(8)  # sounds good?

    @property
    def is_expired(self) -> bool:
        return (js_time() - self.token_generated_at) > THREE_HOURS_JS_TIME


class Questions(db.Model):
    # pylint: disable=E1101
    question_level = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String)
    hint = db.Column(db.String)
    special = db.Column(db.String)
    answer = db.Column(db.String)
    # pylint: disable=E1101
    def __init__(
        self,
        question_level: int,
        question: str,
        answer: str,
        hint: str,
        special: str = "",
    ):
        self.question_level = question_level
        self.question = question
        self.answer = answer
        self.hint = dumps(hint)
        self.special = dumps(special)

    @property
    def as_json(self):
        return {
            "question_level": self.question_level,
            "question": self.question,
            "hint": loads(self.hint),
            "special": loads(self.special),
        }


"""
Log Types 

1.  Site visit
2.  Registered
3.  Log in
4.  Game start
5.  Question Answered (✓)
6.  Question Answered (×)
7.  Admin account created
8.  Admin action 
9.  User (dis/re)qualified
10. Game winner
"""


class Logs(db.Model):
    # pylint: disable=E1101
    action_type = db.Column(db.String)
    action_timestamp = db.Column(db.BigInteger)
    ip_addr = db.Column(db.String)
    action_user = db.Column(db.String)
    action_id = db.Column(db.Integer, primary_key=True)
    _js_dict = db.Column(db.String)
    # pylint: enable=E1101

    def __init__(
        self,
        action_type: str,
        action_user: str,
        ip_addr: str,
        action_timestamp: int,
        js_dict: dict,
    ):
        if not action_type:
            raise Exception("Invalid data")

        self.action_type = sanitize(action_type)
        self.action_timestamp = action_timestamp or js_time()
        self.ip_addr = ip_addr
        self.action_user = action_user
        self._js_dict = dumps(js_dict)

    @property
    def as_json(self):
        return {
            "action_id": self.action_id,
            "action_type": self.action_type,
            "action_timestamp": self.action_timestamp,
            "ip_addr": self.ip_addr,
            "action_user": self.action_user,
            "js_dict": loads(self._js_dict),
        }


# Custom request parser
class ParsedRequest:
    def __init__(self, request: request, action: str):
        self.args = dict(request.args)
        self.headers = request.headers
        self.json: dict = request.get_json()
        self.action = action or ""
        self.client_ip = get_client_ip(request.headers, request.remote_addr)

    @property
    def as_json(self):
        return {
            "args": self.args,
            "headers": dict(self.headers),
            "json": self.json,
            "action": self.action,
            "client_ip": self.client_ip,
        }
