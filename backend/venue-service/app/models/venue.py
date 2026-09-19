from pydantic import BaseModel
from typing import List


class Venue(BaseModel):
    id: str
    name: str
    sport: str
    location: str
    address: str
    description: str
    price_per_hour: float
    available: bool


class VenueListResponse(BaseModel):
    venues: List[Venue]
    total: int