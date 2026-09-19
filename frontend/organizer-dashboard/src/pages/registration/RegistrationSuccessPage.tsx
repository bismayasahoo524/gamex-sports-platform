import { useLocation, useNavigate } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import { sportEvents } from "../../data/gameData";

export default function RegistrationSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as {
    registrationId?: string;
    selectedGame?: string;
    athlete?: {
      firstName: string;
      lastName: string;
    };
  } | null;

  const event = sportEvents[0];

  const registrationId =
    state?.registrationId ?? "GX-10482";

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-success-page">
        <div className="gx-success-container">
          <div className="gx-big-success-icon">✓</div>

          <p className="gx-eyebrow">REGISTRATION COMPLETE</p>

          <h1>You are registered!</h1>

          <p>
            Your registration has been successfully submitted to
            GameX.
          </p>

          <div className="gx-registration-number">
            <span>REGISTRATION ID</span>
            <strong>{registrationId}</strong>
          </div>

          <div className="gx-success-details">
            <div>
              <span>Competition</span>
              <strong>{event.title}</strong>
            </div>

            <div>
              <span>Athlete</span>
              <strong>
                {state?.athlete
                  ? `${state.athlete.firstName} ${state.athlete.lastName}`
                  : "Athlete"}
              </strong>
            </div>

            <div>
              <span>Game</span>
              <strong>{state?.selectedGame ?? "100m Sprint"}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="gx-status-text">
                PENDING
              </strong>
            </div>
          </div>

          <div className="gx-success-actions">
            <button
              type="button"
              className="gx-primary-button"
              onClick={() =>
                navigate(`/my-registrations/${registrationId}`)
              }
            >
              View Registration
            </button>

            <button
              type="button"
              className="gx-secondary-button"
              onClick={() => navigate("/games")}
            >
              Browse More Competitions
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}