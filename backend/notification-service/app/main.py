from fastapi import FastAPI

from app.routes.notifications import router as notification_router


app = FastAPI(
    title="GameX Notification Service",
    version="1.0.0",
    description="Notification service for GameX sports platform",
)


app.include_router(notification_router)


@app.get("/")
def root():
    return {
        "service": "notification-service",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "service": "notification-service",
        "status": "healthy",
    }