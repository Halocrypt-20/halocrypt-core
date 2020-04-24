import smtplib
import os

def send_email_to_user(email: str, subject: str, body: str):
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(os.environ("SMTP_USER"), os.environ("SMTP_PASS"))

        msgw = f'Subject: {subject}\n\n{body}'

        smtp.sendmail(os.environ("SMTP_USER"), email, msgw)
