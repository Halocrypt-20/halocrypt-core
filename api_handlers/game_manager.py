from os import environ
from re import compile as _compile
from typing import List


from flask import request

from app_init import ParsedRequest, Questions, UserTable, get_current_user
from constants import BAD_REQUEST, DENIED, NOT_FOUND
from database import query_all, save_to_db
from response_caching import cache
from util import js_time, map_to_list, safe_int, sanitize

from .common import (
    get_ques_by_id,
    get_user_by_id,
    post_level_up_webhook,
    post_incorrect_webhook,
)


pid = "halocrypt"  # getpid()
replace = _compile(r"\s").sub

no_question = lambda idx: {"game_over": True}
# (
#     #     {"error": f"No Questions Available for id - {idx}"},
#     #     NOT_FOUND,
# )


def clean_node(a):
    x = a.as_json
    x.pop("secure_data")
    return x


# LEADERBOARD_LIMIT = 100


@cache(lambda: f"{pid}_leaderboard_temp_cache")
def generate_leaderboard():
    all_users: List[UserTable] = UserTable.query.order_by(
        UserTable.is_disqualified.asc(),
        UserTable.is_admin.asc(),
        UserTable.current_level.desc(),
        UserTable.last_question_answered_at.asc(),
    ).all()
    return map_to_list(clean_node, all_users)


def get_question(idx: str) -> dict:
    if idx is None:
        return {"error": "No ID"}, BAD_REQUEST
    idx = safe_int(idx)
    # pylint: disable=E1101
    ques: Questions = get_ques_by_id(idx)
    if not ques:
        return no_question(idx)
    return {**ques.as_json, "game_over": False}


incorrect_answer = {"result": False}


def answer_question(question_number: int, answer: str, user: UserTable) -> dict:
    answer = (answer or "").strip()
    if not answer:
        return incorrect_answer
    question: Questions = get_ques_by_id(question_number)
    if not question:
        return no_question(question_number)
    correct = replace("", question.answer)
    current = replace("", answer)
    is_correct = correct == current
    js = f"{user.user} ({user.school}) tried to answer {user.current_level} with {current}  ({'✅' if is_correct else '❌'})"
    if is_correct:
        post_level_up_webhook(js)
    else:
        post_incorrect_webhook(js)
    if is_correct:  # no
        user.current_level = user.current_level + 1  # +=1 yeah
        user.last_question_answered_at = js_time()
        save_to_db()

        return {"result": True, "next_level": user.current_level}
    else:
        return incorrect_answer


def handler(data: ParsedRequest) -> dict:
    action = data.action
    if action == "get-leaderboard":
        return generate_leaderboard()
    user_id = get_current_user()
    if action == "get-question":
        if not user_id:
            return get_question(0)  # by default
        else:
            user_data: UserTable = get_user_by_id(user_id)
            if not user_data:
                return {"error": "Deleted.."}
            return get_question(user_data.current_level)

    if action == "answer-question" or action == "answer":
        if not user_id:
            return {"error": "You are logged out"}, DENIED

        user_data: UserTable = get_user_by_id(user_id)
        if not user_data:
            return {"error": "Deleted"}
        if user_data.is_disqualified:
            return {"error": "Disqualified"}
        return answer_question(
            user_data.current_level, data.json.get("answer"), user_data
        )
