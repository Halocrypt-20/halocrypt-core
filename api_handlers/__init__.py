from . import user_manager
from . import game_manager
from . import admin_panels

route_map = {
    "user": user_manager.handler,
    "play": game_manager.handler,
    "admin": admin_panels.handler,
}


def get_handler(route):
    return route_map.get(route)
