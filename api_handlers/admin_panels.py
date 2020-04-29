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
from util import map_to_list, safe_int
from sqlalchemy import func
from .common import get_user_by_id, get_ques_by_id
from .user_manager import add_user
from json import dumps

ADMIN_TOKEN_OS = environ.get("ADMIN_TOKEN")
# pylint: disable=E1101
def get_latest_q_level() -> int:
    t = func.max(Questions.question_level)
    curr = db.session.query(t).first()[0]
    return curr


def get_next_q_level() -> int:
    t = get_latest_q_level()
    return t + 1 if t is not None else 0


# pylint: enable=E1101


def get_question_data(x: Questions):
    js = x.as_json
    js["answer"] = x.answer
    return js


def get_all_users():
    return map_to_list(lambda x: x.as_json, query_all(UserTable))


def get_all_questions():
    return map_to_list(get_question_data, query_all(Questions))


def is_not_admin(idx: str) -> bool:
    return not get_user_by_id(idx).is_admin


def set_level(user: UserTable, level_to_set):
    level_to_set = safe_int(level_to_set)
    user.current_level = level_to_set
    save_to_db()
    return SUCCESS


def delete_user(user: UserTable):
    delete_from_db(user)
    return SUCCESS


def disqualify(user: UserTable):
    user.is_disqualified = True
    save_to_db()
    return SUCCESS


def requalify(user: UserTable):
    user.is_disqualified = False
    save_to_db()
    return SUCCESS


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
    question: str = js.get("question", "").strip()
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
    qs.question = js.get("question", qs.question)
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


def handler(data: ParsedRequest) -> dict:
    action = data.action
    if action == "create-admin-account":
        return create_admin_account(data)
    if action == "elevate-status":
        return convert_to_admin_account(data.json)
    curr = get_current_user()
    if not curr or is_not_admin(curr):
        return (
            {"error": "You do not have the permissions to access this content"},
            DENIED,
        )
    if action == "get-users":
        return get_all_users()
    if action == "get-questions":
        return get_all_questions()
    if action == "add-question":
        return add_question(data.json)
    if action == "get-latest-question-number":
        q = get_latest_q_level()
        return {"question_number": q, "question_data": get_ques_by_id(q).as_json}
    if action == "edit-question":
        return edit_question(data.json)
    if not data.json:
        return {"error": "Invalid"}
    user = get_user_by_id(data.json.get("user"))
    if action == "set-level":
        return set_level(user, data.json.get("level"))
    if action == "delete-user":
        return delete_user(user)
    if action == "disqualify":
        return disqualify(user)
    if action == "requalify":
        return requalify(user)
