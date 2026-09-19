import { useNavigate, useLocation, useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import RegistrationStepper from "../../components/registration/RegistrationStepper";
import { sportEvents } from "../../data/gameData";

export default function RegistrationEligibilityPage() {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const event = sportEvents.find((item) => item.id === eventId);

  const state = location.state as {
    selectedGame?: string;
    athlete?: {
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      gender: string;
      phone: string;
      email: string;
      city: string;
      state: string;
    };
  } | null;

  if (!event || !state?.athlete || !state.selectedGame) {
    navigate(`/events/${eventId}/register`);
    return null;
  }

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-registration-page">
        <RegistrationStepper currentStep={3} />

        <section className="gx-registration-header">
          <p className="gx-eyebrow">STEP 3 OF 4</p>

          <h1>Eligibility check</h1>

          <p>
            GameX checks your athlete information before registration
            can be submitted.
          </p>
        </section>

        <section className="gx-registration-layout">
          <div className="gx-form-card">
            <div className="gx-eligibility-success">
              <div className="gx-success-icon">✓</div>

              <div>
                <span>ELIGIBILITY STATUS</span>

                <h2>Eligible to register</h2>

                <p>
                  Your current athlete information satisfies the
                  basic registration requirements for this event.
                </p>
              </div>
            </div>

            <div className="gx-check-list">
              <div>
                <span>✓</span>
                <p>Registration is currently open</p>
              </div>

              <div>
                <span>✓</span>
                <p>Event capacity is available</p>
              </div>

              <div>
                <span>✓</span>
                <p>Athlete information is complete</p>
              </div>

              <div>
                <span>✓</span>
                <p>Basic eligibility requirements satisfied</p>
              </div>
            </div>

            <div className="gx-form-actions">
              <button
                type="button"
                className="gx-secondary-button"
                onClick={() =>
                  navigate(
                    `/events/${event.id}/register/athlete`,
                    {
                      state: {
                        selectedGame: state.selectedGame,
                      },
                    }
                  )
                }
              >
                Back
              </button>

              <button
                type="button"
                className="gx-primary-button"
                onClick={() =>
                  navigate(
                    `/events/${event.id}/register/review`,
                    {
                      state,
                    }
                  )
                }
              >
                Continue to Review
              </button>
            </div>
          </div>

          <aside className="gx-registration-summary">
            <span>ATHLETE</span>

            <h3>
              {state.athlete.firstName} {state.athlete.lastName}
            </h3>

            <p>{state.athlete.email}</p>

            <hr />

            <span>GAME</span>

            <strong>{state.selectedGame}</strong>
          </aside>
        </section>
      </main>
    </div>
  );
}