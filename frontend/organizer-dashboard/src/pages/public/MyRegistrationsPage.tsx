import { useNavigate } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";

const registrations = [
  {
    id: "GX-10482",
    event: "National Athletics Championship 2026",
    game: "100m Sprint",
    date: "18 Oct 2026",
    status: "PENDING",
  },
  {
    id: "GX-10431",
    event: "Inter-State Sprint Championship",
    game: "200m Sprint",
    date: "25 Oct 2026",
    status: "APPROVED",
  },
];

export default function MyRegistrationsPage() {
  const navigate = useNavigate();

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-page">
        <section className="gx-page-header">
          <p className="gx-eyebrow">ATHLETE PORTAL</p>

          <h1>My registrations</h1>

          <p>
            Track your competition registrations and registration
            status.
          </p>
        </section>

        <section className="gx-registration-list">
          {registrations.map((registration) => (
            <article
              className="gx-my-registration-card"
              key={registration.id}
            >
              <div>
                <span>{registration.id}</span>

                <h3>{registration.event}</h3>

                <p>
                  {registration.game} · {registration.date}
                </p>
              </div>

              <div className="gx-registration-status">
                <span
                  className={
                    registration.status === "APPROVED"
                      ? "gx-status approved"
                      : "gx-status pending"
                  }
                >
                  {registration.status}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/my-registrations/${registration.id}`
                    )
                  }
                >
                  View →
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}