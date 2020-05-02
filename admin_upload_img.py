import cloudinary.uploader
from json import load
from os import environ

environ_get = environ.get


def upload(imgurl):
    try:
        imgurl = imgurl["full"] if isinstance(imgurl, dict) else imgurl
        if "nopicture" in imgurl:
            return 0
        clapi_key = environ_get("cloudinary_key")
        clapi_secret = environ_get("cloudinary_secret")
        cloudinary.config(
            cloud_name="halocrypt-img-proxy", api_key=clapi_key, api_secret=clapi_secret
        )
        a = cloudinary.uploader.upload(imgurl, fetch_format="auto", quality="auto")
        return a
    except Exception as e:
        print(e)
        return 0


if __name__ == "__main__":
    data = upload(input("enter url:"))
    print("Raw Data:%s\n\n" % (data))
