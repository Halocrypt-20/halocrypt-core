from smtplib import SMTP
from os import environ

def send_email_to_user(init, email, subject, content):
    with SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(environ.get("MAIL_USERNAME"), environ.get("MAIL_PASSWORD"))
        message = f'Subject: {subject}\n\n{content}'
        smtp.sendmail(environ.get("MAIL_USERNAME"), email, message)
        return str("Message sent!")
