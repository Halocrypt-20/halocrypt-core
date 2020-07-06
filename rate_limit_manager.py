"""
XXX this is a very naive implementation
This is just placed here to prevent multiple database hits

I think placing such data in the filesystem is a bad idea but our stack has ephemeral fs so...
We could store this data in the memory however we run this on 4 workers and no shared memory is another headache

If you have anything better than storing and accessing the filesystem.. PR please.
"""

from flask import request
from os.path import isfile, isdir, join
from os import mkdir as native_mkdir, getcwd
from json import dump, loads


def mkdir(d: str):
    isdir(d) or native_mkdir(d)


IP_ADDRESS_STORE = join(getcwd(), "@request-log")


def write(file: str, data: dict):
    with open(file, "w") as f:
        dump(data, f)


def remove_previous_entries(d: dict) -> dict:
    return d


def read(file: str) -> dict:
    if isfile(file):
        with open(file) as f:
            dx = f.read().strip()
            if dx:
                data = loads(dx)
                return remove_previous_entries(data)
            return None
    return None


def check_rate_limit(request: request):
    ip = request.remote_addr
    mkdir(IP_ADDRESS_STORE)
