from app_init import ParsedRequest, Logs, get_current_user
from database import add_to_db, query_all
from util import map_to_list, js_time
from .common import get_user_by_id


def handler(data: ParsedRequest):
    action = data.action
    ip = data.client_ip
    current = get_current_user()
    if action == "1":
        js = data.json
        type_ = js.pop("type")
        user = current or None
        log = Logs(type_, user, ip, js_time(), js)
        add_to_db(log)
        return {"success": "Ok"}
    if action == "get":
        if current is None:
            return {"error": "Not authenticated"}
        user = get_user_by_id(current)
        if user is None or not user.is_admin:
            return {"error": "Not authenticated"}
        ret = query_all(Logs)
        return map_to_list(lambda x: x.as_json, ret)
