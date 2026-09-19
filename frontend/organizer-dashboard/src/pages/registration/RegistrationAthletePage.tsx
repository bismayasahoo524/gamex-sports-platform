import { useState } from "react";
import type { FormEvent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";
import RegistrationStepper from "../../components/registration/RegistrationStepper";
import { sportEvents } from "../../data/gameData";

export default function RegistrationAthletePage() {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const event = sportEvents.find((item) => item.id === eventId);

  const state = location.state as {
    selectedGame?: string;
  } | null;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
    state: "",
  });

  if (!event) {
    return <div>Competition not found.</div>;
  }

  if (!state?.selectedGame) {
    navigate(`/events/${event.id}/register`);
    return null;
  }

  const handleSubmit = (eventForm: FormEvent) => {
    eventForm.preventDefault();

    navigate(`/events/${event.id}/register/eligibility`, {
      state: {
        selectedGame: state.selectedGame,
        athlete: form,
      },
    });
  };

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-registration-page">
        <RegistrationStepper currentStep={2} />

        <section className="gx-registration-header">
          <p className="gx-eyebrow">STEP 2 OF 4</p>

          <h1>Athlete information</h1>

          <p>
            Enter the details that will be used for your competition
            registration.
          </p>
        </section>

        <section className="gx-registration-layout">
          <form className="gx-form-card" onSubmit={handleSubmit}>
            <div className="gx-form-section">
              <h3>Personal information</h3>

              <div className="gx-form-grid">
                <label>
                  First name
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        firstName: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Last name
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        lastName: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Date of birth
                  <input
                    required
                    type="date"
                    value={form.dateOfBirth}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        dateOfBirth: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Gender
                  <select
                    required
                    value={form.gender}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="">Select gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="gx-form-section">
              <h3>Contact information</h3>

              <div className="gx-form-grid">
                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  City
                  <input
                    required
                    value={form.city}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  State
                  <input
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        state: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
            </div>

            <div className="gx-form-actions">
              <button
                type="button"
                className="gx-secondary-button"
                onClick={() =>
                  navigate(`/events/${event.id}/register`, {
                    state: {
                      selectedGame: state.selectedGame,
                    },
                  })
                }
              >
                Back
              </button>

              <button type="submit" className="gx-primary-button">
                Continue
              </button>
            </div>
          </form>

          <aside className="gx-registration-summary">
            <span>SELECTED EVENT</span>
            <h3>{state.selectedGame}</h3>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </aside>
        </section>
      </main>
    </div>
  );
}