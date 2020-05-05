import requests
from app_init import (
    Questions,
    UserTable,
    EphermalTokenStore,
    LOG_FILE_NAME as filename,
    LOCK_FILE,
)
from sqlalchemy import func as _func
from threading import Thread
from os import environ, remove
from json import loads, dumps
from os.path import isfile
from time import sleep

webhook_url = environ.get("USER_ACTION_WEBHOOK")
incorrect_ = environ.get("INCORRECT_ANSWER")
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


@run_in_thread
def post_incorrect_webhook(js):
    requests.post(incorrect_, json={"content": js})


def get_ques_by_id(idx: str) -> Questions:
    return Questions.query.filter_by(question_level=idx).first()


def get_user_by_id(user_id: str) -> UserTable:
    return UserTable.query.filter(
        lower(UserTable.user) == lower(user_id.strip())
    ).first()


def get_token_store_by_token(token: str) -> EphermalTokenStore:
    return EphermalTokenStore.query.filter_by(token_string=token).first()


def open_and_read(file):
    wait_for_lock_file()
    if not isfile(file):
        return None
    with open(file) as f:
        dx = f.read().strip()
        delete_lockfile()
        if dx:
            return loads(dx)
        return None


def touch_lockfile():
    open(LOCK_FILE, "w").close()


def delete_lockfile():
    remove(LOCK_FILE)


def wait_for_lock_file():
    while isfile(LOCK_FILE):
        sleep(0.1)
    touch_lockfile()  #
    return


# different from response caching, uses lockfile as we can afford 100ms delay as we're not sending
# any response anyway
def open_and_write(file, data):
    wait_for_lock_file()
    with open(file, "w") as f:
        f.write(dumps(data))
    delete_lockfile()


def get_log_from_file_system():
    file = open_and_read(filename) or []
    if file:
        file.sort(key=lambda x: x.get("timestamp"), reverse=True)
    return file


sentinel = object()


@run_in_thread
def save_log_to_file_system(js):
    data = open_and_read(filename) or []
    if js != sentinel:
        data.append(js)
    return open_and_write(filename, data)


def clean_logs():
    return


#  open_and_write(filename, sentinel)


def merge_logs(js):
    # do not use get_logs_from_file_system to prevent
    # useless sorting
    if "data" in js:
        js = js.get("data")
    if not js:
        return
    dx = open_and_read(filename) or []
    for i in js:
        if i not in dx:
            dx.append(i)
    open_and_write(filename, list(dx))
