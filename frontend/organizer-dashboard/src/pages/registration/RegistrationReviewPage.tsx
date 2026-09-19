import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import RegistrationStepper from "../../components/registration/RegistrationStepper";
import { sportEvents } from "../../data/gameData";

export default function RegistrationReviewPage() {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [confirmed, setConfirmed] = useState(false);

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

  const handleSubmit = () => {
    if (!confirmed) return;

    const registrationId =
      "GX-" + Math.floor(10000 + Math.random() * 90000);

    navigate(`/events/${event.id}/register/success`, {
      state: {
        registrationId,
        selectedGame: state.selectedGame,
        athlete: state.athlete,
      },
    });
  };

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-registration-page">
        <RegistrationStepper currentStep={4} />

        <section className="gx-registration-header">
          <p className="gx-eyebrow">STEP 4 OF 4</p>

          <h1>Review your registration</h1>

          <p>
            Please check your information before submitting your
            competition registration.
          </p>
        </section>

        <section className="gx-review-card">
          <div className="gx-review-section">
            <div className="gx-review-heading">
              <h3>Competition</h3>

              <button
                type="button"
                onClick={() =>
                  navigate(`/events/${event.id}/register`)
                }
              >
                Edit
              </button>
            </div>

            <div className="gx-review-row">
              <span>Competition</span>
              <strong>{event.title}</strong>
            </div>

            <div className="gx-review-row">
              <span>Game</span>
              <strong>{state.selectedGame}</strong>
            </div>

            <div className="gx-review-row">
              <span>Date</span>
              <strong>{event.date}</strong>
            </div>

            <div className="gx-review-row">
              <span>Venue</span>
              <strong>{event.location}</strong>
            </div>
          </div>

          <div className="gx-review-section">
            <div className="gx-review-heading">
              <h3>Athlete</h3>

              <button
                type="button"
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
                Edit
              </button>
            </div>

            <div className="gx-review-row">
              <span>Name</span>
              <strong>
                {state.athlete.firstName}{" "}
                {state.athlete.lastName}
              </strong>
            </div>

            <div className="gx-review-row">
              <span>Date of birth</span>
              <strong>{state.athlete.dateOfBirth}</strong>
            </div>

            <div className="gx-review-row">
              <span>Gender</span>
              <strong>{state.athlete.gender}</strong>
            </div>

            <div className="gx-review-row">
              <span>Email</span>
              <strong>{state.athlete.email}</strong>
            </div>

            <div className="gx-review-row">
              <span>Phone</span>
              <strong>{state.athlete.phone}</strong>
            </div>
          </div>

          <div className="gx-payment-summary">
            <span>REGISTRATION FEE</span>
            <strong>₹{event.price}</strong>
          </div>

          <label className="gx-confirmation">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />

            <span>
              I confirm that the information provided is accurate
              and I agree to the GameX competition registration
              terms.
            </span>
          </label>

          <div className="gx-form-actions">
            <button
              type="button"
              className="gx-secondary-button"
              onClick={() =>
                navigate(
                  `/events/${event.id}/register/eligibility`,
                  {
                    state,
                  }
                )
              }
            >
              Back
            </button>

            <button
              type="button"
              className="gx-primary-button"
              disabled={!confirmed}
              onClick={handleSubmit}
            >
              Submit Registration
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}