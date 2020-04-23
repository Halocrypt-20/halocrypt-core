from email.utils import parseaddr
from urllib.parse import urlparse as _parse
from re import compile as _compile
from time import time as _time

# Should  I verify with the MX records?
def validate_email_address(email_id: str) -> str:
    if "@" in parseaddr(email_id)[1]:
        return email_id
    raise Exception("Invalid Email")


def add_cookie(data: dict):
    return {"cookies": data}


def get_host(request):
    get = request.headers.get
    return get("Origin") or get("Host") or get("x-halocrypt-origin")


def is_prod(request) -> bool:
    t = get_host(request)
    return "localhost" not in t


def map_to_list(*args) -> list:
    return list(map(*args))


def safe_int(idx) -> int:
    return int(idx) if not isinstance(idx, int) else idx


# maybe only strip whitespace?
_sub = _compile(r"([^\w]|_)").sub
sanitize = lambda x: _sub("", x).strip().lower()


js_time = lambda: _time() * 1e3


def get_client_ip(headers: dict, remote_addr: str) -> str:
    try:
        xfwd = headers.get("x-forwarded-for", remote_addr)
        if not xfwd:
            return ""
        arr = list(filter(bool, map(lambda x: x.strip(), xfwd.split(","))))
        if len(arr) == 1:
            return arr[0]
        num_proxies = 1
        real_ip = (arr)[-(1 + num_proxies)]
        return real_ip
    except:
        return ""
