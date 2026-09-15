from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Registration
from app.schemas import RegistrationCreate, RegistrationResponse

router = APIRouter(
    prefix="/registrations",
    tags=["Registrations"]
)


@router.post(
    "/",
    response_model=RegistrationResponse
)
def create_registration(
    registration: RegistrationCreate,
    db: Session = Depends(get_db)
):
    if not registration.athlete_id and not registration.team_id:
        raise HTTPException(
            status_code=400,
            detail="Either athlete_id or team_id is required"
        )

    if registration.athlete_id and registration.team_id:
        raise HTTPException(
            status_code=400,
            detail="Provide either athlete_id or team_id, not both"
        )

    new_registration = Registration(
        event_id=registration.event_id,
        athlete_id=registration.athlete_id,
        team_id=registration.team_id,
        status="PENDING",
        payment_status="PENDING"
    )

    db.add(new_registration)
    db.commit()
    db.refresh(new_registration)

    return new_registration


@router.get(
    "/{registration_id}",
    response_model=RegistrationResponse
)
def get_registration(
    registration_id: str,
    db: Session = Depends(get_db)
):
    registration = (
        db.query(Registration)
        .filter(Registration.id == registration_id)
        .first()
    )

    if not registration:
        raise HTTPException(
            status_code=404,
            detail="Registration not found"
        )

    return registration


@router.get(
    "/event/{event_id}",
    response_model=list[RegistrationResponse]
)
def get_event_registrations(
    event_id: str,
    db: Session = Depends(get_db)
):
    return (
        db.query(Registration)
        .filter(Registration.event_id == event_id)
        .all()
    )


@router.patch(
    "/{registration_id}/accept",
    response_model=RegistrationResponse
)
def accept_registration(
    registration_id: str,
    db: Session = Depends(get_db)
):
    registration = (
        db.query(Registration)
        .filter(Registration.id == registration_id)
        .first()
    )

    if not registration:
        raise HTTPException(
            status_code=404,
            detail="Registration not found"
        )

    registration.status = "ACCEPTED"

    db.commit()
    db.refresh(registration)

    return registration