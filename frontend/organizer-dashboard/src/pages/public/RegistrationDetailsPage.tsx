import { useParams } from "react-router-dom";

import PublicNavbar from "../../components/public/PublicNavbar";

const timeline = [
  {
    title: "Registration Submitted",
    description: "Your registration was received by GameX.",
    completed: true,
  },
  {
    title: "Eligibility Verified",
    description: "Athlete eligibility checks completed.",
    completed: true,
  },
  {
    title: "Organizer Review",
    description: "The organizer is reviewing your registration.",
    completed: false,
  },
  {
    title: "Approved",
    description: "Registration approval.",
    completed: false,
  },
  {
    title: "Match Assigned",
    description: "Your competition schedule will appear here.",
    completed: false,
  },
  {
    title: "Result Published",
    description: "Competition result will appear here.",
    completed: false,
  },
];

export default function RegistrationDetailsPage() {
  const { registrationId } = useParams();

  return (
    <div className="gx-site">
      <PublicNavbar />

      <main className="gx-page">
        <section className="gx-page-header">
          <p className="gx-eyebrow">REGISTRATION</p>

          <h1>{registrationId}</h1>

          <p>
            Track every stage of your GameX competition registration.
          </p>
        </section>

        <section className="gx-registration-detail-card">
          <div className="gx-detail-header">
            <div>
              <span>COMPETITION</span>
              <h2>National Athletics Championship 2026</h2>
              <p>100m Sprint · 18 Oct 2026</p>
            </div>

            <span className="gx-status pending">PENDING</span>
          </div>

          <div className="gx-timeline">
            {timeline.map((item, index) => (
              <div
                className={
                  item.completed
                    ? "gx-timeline-item completed"
                    : "gx-timeline-item"
                }
                key={item.title}
              >
                <div className="gx-timeline-marker">
                  {item.completed ? "✓" : index + 1}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}