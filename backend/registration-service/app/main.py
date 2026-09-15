from fastapi import FastAPI

from app.database import Base, engine
from app.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GameX Registration Service",
    version="1.0.0"
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "service": "registration-service",
        "status": "running"
    }