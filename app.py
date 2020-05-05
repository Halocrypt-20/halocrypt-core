from flask import Flask, request, send_from_directory, Response

from app_init import (
    app,
    json_response,
    ParsedRequest,
    clear_data,
    get_session,
    get_current_user,
)
from api_handlers import get_handler
from util import get_client_ip
from api_handlers.email_manager import send_email_to_user
from nocache import nocache
from api_handlers.admin_panels import is_not_admin
from gc import collect

# Favicon
@app.route("/favicon.ico")
def favicon():
    return send_from_directory("static", "favicon.ico")


kwargs = dict(strict_slashes=False, methods=["post", "get"])

# setup redirect to frontend?
@app.route("/<route>/", **kwargs)
@app.route("/<route>/<action>/", **kwargs)
@app.route("/")
def index(route=None, action=None):
    return send_from_directory("docs", "index.html", cache_timeout=0)


@app.route("/docs/<path:asset>")
def file_send(asset):
    return send_from_directory("docs", asset)


@app.route("/_/ip")
def ip_addr():
    return json_response(
        {
            "inferred_ip": get_client_ip(request.headers, request.remote_addr),
            "remote_addr": request.remote_addr,
            "x-fwd": request.headers.get("x-forwarded-for"),
        }
    )


@app.route("/api/logout/", strict_slashes=False, methods=["post"])
def handle_logout():
    return clear_data()


@app.route("/api/admin/get-logs/", strict_slashes=False)
@nocache
def handle_logs():
    user = get_current_user()
    collect()
    if user and not is_not_admin(user):
        return send_from_directory("@cache", "__logs__.json")


@app.route("/api/<route>/", **kwargs)
@app.route("/api/<route>/<action>/", **kwargs)
def handle_api_call(route, action=None):
    # get one of the user/play/admin handlers
    handler = get_handler(route)
    if not handler:
        return json_response(
            {"error": f"no handler for api '{route[:50]}'"}, status=404
        )
    # parse request
    parsed_request = ParsedRequest(request, action)
    data = handler(parsed_request)
    kwargs = {}
    # if our handler returned a tuple, the second element is kwargs object
    if isinstance(data, tuple):
        kwargs = data[1]
        data = data[0]
    return json_response({"data": data}, **kwargs)


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
