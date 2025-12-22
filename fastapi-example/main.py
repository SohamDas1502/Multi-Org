from fastapi import FastAPI, Depends
from fastapi_plugin.fast_api_client import Auth0FastAPI
from config import get_settings

settings = get_settings()
auth0 = Auth0FastAPI(
   domain=settings.auth0_domain,
   audience=settings.auth0_api_audience
)

app = FastAPI()

@app.get("/api/public")
def public():

    result = {
        "status": "success",
       "msg": ("Hello from a public endpoint! You don't need to be "
               "authenticated to see this.")
    }

    return result

@app.get("/api/private")
def private(claims: dict = Depends(auth0.require_auth())):
   # A valid access token is required to access this route
   return claims