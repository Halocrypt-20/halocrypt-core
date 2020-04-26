from smtplib import SMTP
from os import environ

mail_username = environ.get("MAIL_USER")
mail_pass = environ.get("MAIL_PASS")


def send_email_to_user(email, subject, content):
    with SMTP("smtp.gmail.com", 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(mail_username, mail_pass)
        message = f"Subject: {subject}\n\n{content}"
        smtp.sendmail(mail_username, email, message)
