import requests
from app_init import Questions, UserTable, EphermalTokenStore
from sqlalchemy import func as _func
from threading import Thread
from os import environ

webhook_url = environ.get("USER_ACTION_WEBHOOK")

lower = _func.lower


def run_in_thread(fn):
    def run(*k, **kw):
        t = Thread(target=fn, args=k, kwargs=kw)
        t.start()
        return t

    return run


@run_in_thread
def post_level_up_webhook(js):
    requests.post(webhook_url, json={"content": js})


def get_ques_by_id(idx: str) -> Questions:
    return Questions.query.filter_by(question_level=idx).first()


def get_user_by_id(user_id: str) -> UserTable:
    return UserTable.query.filter(
        lower(UserTable.user) == lower(user_id.strip())
    ).first()


def get_token_store_by_token(token: str) -> EphermalTokenStore:
    return EphermalTokenStore.query.filter_by(token_string=token).first()
