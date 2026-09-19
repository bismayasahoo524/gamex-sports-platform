import { useLocation, useNavigate, useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import RegistrationStepper from "../../components/registration/RegistrationStepper";
import { sportEvents } from "../../data/gameData";

export default function RegistrationGamePage() {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const event = sportEvents.find((item) => item.id === eventId);

  const selectedGame =
    (location.state as { selectedGame?: string } | null)
      ?.selectedGame ?? "";

  if (!event) {
    return <div>Competition not found.</div>;
  }

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-registration-page">
        <RegistrationStepper currentStep={1} />

        <section className="gx-registration-header">
          <p className="gx-eyebrow">STEP 1 OF 4</p>

          <h1>Choose your event</h1>

          <p>
            Select the game you want to participate in at{" "}
            <strong>{event.title}</strong>.
          </p>
        </section>

        <section className="gx-registration-layout">
          <div className="gx-form-card">
            <div className="gx-game-selection">
              {event.games.map((game) => (
                <button
                  type="button"
                  key={game}
                  className={
                    selectedGame === game
                      ? "gx-game-option selected"
                      : "gx-game-option"
                  }
                  onClick={() =>
                    navigate(`/events/${event.id}/register`, {
                      state: { selectedGame: game },
                    })
                  }
                >
                  <div>
                    <strong>{game}</strong>
                    <span>{event.category}</span>
                  </div>

                  <span>
                    {selectedGame === game ? "✓" : "→"}
                  </span>
                </button>
              ))}
            </div>

            <div className="gx-form-actions">
              <button
                type="button"
                className="gx-secondary-button"
                onClick={() => navigate(`/events/${event.id}`)}
              >
                Back
              </button>

              <button
                type="button"
                className="gx-primary-button"
                disabled={!selectedGame}
                onClick={() =>
                  navigate(
                    `/events/${event.id}/register/athlete`,
                    {
                      state: { selectedGame },
                    }
                  )
                }
              >
                Continue
              </button>
            </div>
          </div>

          <aside className="gx-registration-summary">
            <span>COMPETITION</span>

            <h3>{event.title}</h3>

            <p>{event.location}</p>

            <p>{event.date}</p>

            <hr />

            <span>REGISTRATION FEE</span>

            <strong>₹{event.price}</strong>
          </aside>
        </section>
      </main>
    </div>
  );
}