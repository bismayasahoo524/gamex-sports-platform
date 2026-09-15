from typing import Optional

from pydantic import BaseModel


class RegistrationCreate(BaseModel):
    event_id: str
    athlete_id: Optional[str] = None
    team_id: Optional[str] = None


class RegistrationResponse(BaseModel):
    id: str
    event_id: str
    athlete_id: Optional[str]
    team_id: Optional[str]
    status: str
    payment_status: str

    class Config:
        from_attributes = True