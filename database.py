from app_init import db


# pylint: disable=E1101
def add_to_db(data,batch=False):
    db.session.add(data)
    not batch and save_to_db()


def query_all(table):
    return table.query.all()


def save_to_db():
    db.session.commit()


def delete_from_db(d, batch=False):
    if d:
        db.session.delete(d)
        not batch and save_to_db()


# pylint: enable=E1101
