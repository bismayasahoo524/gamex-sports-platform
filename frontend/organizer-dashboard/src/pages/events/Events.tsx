import { useNavigate } from "react-router-dom";

const events = [
  {
    id: "EVT-001",
    name: "National Athletics Championship",
    sport: "Athletics",
    date: "18 Oct 2026",
    participants: 428,
    status: "Registration Open",
  },
  {
    id: "EVT-002",
    name: "Inter-State Sprint Championship",
    sport: "Athletics",
    date: "25 Oct 2026",
    participants: 312,
    status: "Registration Open",
  },
  {
    id: "EVT-003",
    name: "GameX Junior Athletics Meet",
    sport: "Athletics",
    date: "02 Nov 2026",
    participants: 196,
    status: "Draft",
  },
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="events-page">
      <div className="events-header">
        <div>
          <p className="dashboard-eyebrow">GAMEX ORGANIZER</p>

          <h1>Events</h1>

          <p className="dashboard-description">
            Create, manage, and monitor your sports competitions.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/events/create")}
        >
          + Create Event
        </button>
      </div>

      <div className="events-stats">
        <div className="event-stat-card">
          <span>Total Events</span>
          <strong>24</strong>
        </div>

        <div className="event-stat-card">
          <span>Registration Open</span>
          <strong>8</strong>
        </div>

        <div className="event-stat-card">
          <span>Live Events</span>
          <strong>3</strong>
        </div>

        <div className="event-stat-card">
          <span>Completed</span>
          <strong>13</strong>
        </div>
      </div>

      <div className="events-panel">
        <div className="panel-header">
          <div>
            <h2>Competition Events</h2>
            <p>Manage your GameX competitions</p>
          </div>

          <button
            className="view-all-button"
            onClick={() => navigate("/events/create")}
          >
            Create event →
          </button>
        </div>

        <div className="registration-table-wrapper">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event</th>
                <th>Sport</th>
                <th>Date</th>
                <th>Participants</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>

                  <td>
                    <strong>{event.name}</strong>
                  </td>

                  <td>{event.sport}</td>

                  <td>{event.date}</td>

                  <td>{event.participants}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        event.status === "Draft"
                          ? "pending"
                          : "approved"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}