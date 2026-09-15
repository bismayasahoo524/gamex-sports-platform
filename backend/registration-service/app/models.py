import uuid
from datetime import datetime

from sqlalchemy import Column, String, DateTime

from app.database import Base


class Registration(Base):
    __tablename__ = "registrations"

    id = Column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4())
    )

    event_id = Column(
        String(36),
        nullable=False,
        index=True
    )

    athlete_id = Column(
        String(36),
        nullable=True,
        index=True
    )

    team_id = Column(
        String(36),
        nullable=True,
        index=True
    )

    status = Column(
        String(50),
        nullable=False,
        default="PENDING"
    )

    payment_status = Column(
        String(50),
        nullable=False,
        default="PENDING"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )