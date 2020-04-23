from app_init import Questions, UserTable, EphermalTokenStore
from sqlalchemy import func as _func

lower = _func.lower


def get_ques_by_id(idx: str) -> Questions:
    return Questions.query.filter_by(question_level=idx).first()


def get_user_by_id(user_id: str) -> UserTable:
    return UserTable.query.filter(
        lower(UserTable.user) == lower(user_id.strip())
    ).first()


def get_token_store_by_token(token: str) -> EphermalTokenStore:
    return EphermalTokenStore.query.filter_by(token_string=token).first()
