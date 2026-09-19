import { useNavigate, useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import { sportEvents } from "../../data/gameData";

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = sportEvents.find((item) => item.id === eventId);

  if (!event) {
    return (
      <div className="gx-site">
        <PublicNavbar />

        <main className="gx-page">
          <div className="gx-empty-state">
            <h1>Competition not found</h1>

            <button
              type="button"
              className="gx-primary-button"
              onClick={() => navigate("/games")}
            >
              Browse competitions
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-page">
        <button
          type="button"
          className="gx-back-button"
          onClick={() => navigate("/games")}
        >
          ← Back to competitions
        </button>

        <section className="gx-event-detail-hero">
          <div>
            <span className="gx-status-pill">{event.status}</span>

            <p className="gx-eyebrow">{event.sport}</p>

            <h1>{event.title}</h1>

            <p>{event.description}</p>
          </div>

          <div className="gx-registration-card">
            <span>Registration fee</span>

            <strong>₹{event.price}</strong>

            <p>Registration closes {event.registrationDeadline}</p>

            <button
              type="button"
              className="gx-primary-button full"
              onClick={() =>
                navigate(`/events/${event.id}/register`)
              }
            >
              Register Now
            </button>
          </div>
        </section>

        <section className="gx-detail-grid">
          <div className="gx-detail-panel">
            <span>DATE</span>
            <strong>{event.date}</strong>
            <small>to {event.endDate}</small>
          </div>

          <div className="gx-detail-panel">
            <span>LOCATION</span>
            <strong>{event.location}</strong>
          </div>

          <div className="gx-detail-panel">
            <span>PARTICIPANTS</span>
            <strong>
              {event.participants} / {event.capacity}
            </strong>
          </div>

          <div className="gx-detail-panel">
            <span>REGISTRATION</span>
            <strong>{event.registrationDeadline}</strong>
          </div>
        </section>

        <section className="gx-games-section">
          <div className="gx-section-heading">
            <div>
              <p className="gx-eyebrow">AVAILABLE EVENTS</p>
              <h2>Choose your game</h2>
            </div>
          </div>

          <div className="gx-games-list">
            {event.games.map((game) => (
              <button
                type="button"
                key={game}
                onClick={() =>
                  navigate(`/events/${event.id}/register`, {
                    state: { selectedGame: game },
                  })
                }
              >
                <span>{game}</span>
                <span>Register →</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}