from fastapi import FastAPI

from app.routers.venues import router as venue_router

app = FastAPI(
    title="GameX Venue Service",
    version="1.0.0",
)

app.include_router(venue_router)


@app.get("/health")
def health():
    return {
        "service": "venue-service",
        "status": "healthy",
    }