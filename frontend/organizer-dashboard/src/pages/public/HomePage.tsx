import { useNavigate } from "react-router-dom";
import PublicNavbar from "../../components/public/PublicNavbar";
import { sportEvents } from "../../data/gameData";

export default function HomePage() {
  const navigate = useNavigate();

  const featuredEvents = sportEvents.slice(0, 3);

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main>
        <section className="gx-hero">
          <div className="gx-hero-content">
            <p className="gx-eyebrow">GAMEX SPORTS PLATFORM</p>

            <h1>
              Find your next
              <br />
              <span>competition.</span>
            </h1>

            <p className="gx-hero-description">
              Discover sports competitions, register as an athlete,
              track your registration and follow your results — all in one
              place.
            </p>

            <div className="gx-hero-actions">
              <button
                type="button"
                className="gx-primary-button"
                onClick={() => navigate("/games")}
              >
                Explore Competitions
              </button>

              <button
                type="button"
                className="gx-secondary-button"
                onClick={() => navigate("/my-registrations")}
              >
                My Registrations
              </button>
            </div>
          </div>

          <div className="gx-hero-card">
            <div className="gx-hero-card-top">
              <span>LIVE NOW</span>
              <span className="gx-live-indicator"></span>
            </div>

            <h3>National Athletics Championship</h3>

            <p>Kalinga Stadium, Bhubaneswar</p>

            <div className="gx-hero-stat-row">
              <div>
                <strong>1,000+</strong>
                <span>Athlete Capacity</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Events</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                navigate("/events/national-athletics-2026")
              }
            >
              View Competition →
            </button>
          </div>
        </section>

        <section className="gx-section">
          <div className="gx-section-heading">
            <div>
              <p className="gx-eyebrow">DISCOVER</p>
              <h2>Popular competitions</h2>
            </div>

            <button
              type="button"
              className="gx-text-button"
              onClick={() => navigate("/games")}
            >
              View all →
            </button>
          </div>

          <div className="gx-event-grid">
            {featuredEvents.map((event) => (
              <article className="gx-event-card" key={event.id}>
                <div className="gx-event-card-image">
                  <span>{event.sport}</span>
                </div>

                <div className="gx-event-card-content">
                  <div className="gx-event-meta">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <div className="gx-event-bottom">
                    <strong>₹{event.price}</strong>

                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/events/${event.id}`)
                      }
                    >
                      Register →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gx-how-section">
          <div>
            <p className="gx-eyebrow">HOW GAMEX WORKS</p>
            <h2>From discovery to competition.</h2>
          </div>

          <div className="gx-process-grid">
            <div>
              <span>01</span>
              <h3>Find</h3>
              <p>Discover competitions based on your sport.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Register</h3>
              <p>Complete your athlete profile and eligibility.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Compete</h3>
              <p>Get scheduled and participate in your event.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Track</h3>
              <p>Follow your registration and competition results.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="gx-footer">
        <strong>GameX</strong>
        <span>Sports competition management platform</span>
      </footer>
    </div>
  );
}