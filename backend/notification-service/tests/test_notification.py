from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_service_is_running():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json()["service"] == "notification-service"
    assert response.json()["status"] == "running"


def test_health():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_create_notification():
    payload = {
        "recipient": "athlete@example.com",
        "subject": "Match Update",
        "message": "Your match starts in 30 minutes.",
        "notification_type": "email",
    }

    response = client.post(
        "/v1/notifications/",
        json=payload,
    )

    assert response.status_code == 200

    data = response.json()

    assert data["status"] == "accepted"
    assert data["notification_type"] == "email"
    assert "notification_id" in data