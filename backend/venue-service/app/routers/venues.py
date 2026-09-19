from fastapi import APIRouter, HTTPException, Query

from app.models.venue import Venue, VenueListResponse

router = APIRouter(
    prefix="/v1/venues",
    tags=["Venues"]
)


VENUES = [
    Venue(
        id="venue-001",
        name="GameX Football Arena",
        sport="football",
        location="Bhubaneswar",
        address="Patia, Bhubaneswar",
        description="Professional football turf for 5-a-side and 7-a-side games.",
        price_per_hour=800,
        available=True,
    ),
    Venue(
        id="venue-002",
        name="GameX Cricket Ground",
        sport="cricket",
        location="Bhubaneswar",
        address="Jayadev Vihar, Bhubaneswar",
        description="Cricket ground suitable for practice and matches.",
        price_per_hour=1200,
        available=True,
    ),
    Venue(
        id="venue-003",
        name="GameX Badminton Arena",
        sport="badminton",
        location="Bhubaneswar",
        address="Sahid Nagar, Bhubaneswar",
        description="Indoor badminton courts.",
        price_per_hour=500,
        available=True,
    ),
    Venue(
        id="venue-004",
        name="GameX Tennis Club",
        sport="tennis",
        location="Bhubaneswar",
        address="Khandagiri, Bhubaneswar",
        description="Tennis courts for training and recreational play.",
        price_per_hour=700,
        available=True,
    ),
]


@router.get("", response_model=VenueListResponse)
def get_venues(
    location: str | None = Query(default=None),
    sport: str | None = Query(default=None),
):
    venues = VENUES

    if location:
        venues = [
            venue
            for venue in venues
            if venue.location.lower() == location.lower()
        ]

    if sport:
        venues = [
            venue
            for venue in venues
            if venue.sport.lower() == sport.lower()
        ]

    return VenueListResponse(
        venues=venues,
        total=len(venues),
    )


@router.get("/{venue_id}", response_model=Venue)
def get_venue(venue_id: str):

    for venue in VENUES:
        if venue.id == venue_id:
            return venue

    raise HTTPException(
        status_code=404,
        detail="Venue not found",
    )