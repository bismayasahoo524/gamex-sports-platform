import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

const registrations = [
  {
    id: "REG-001",
    athlete: "John Doe",
    event: "100m Sprint",
    status: "APPROVED",
  },
  {
    id: "REG-002",
    athlete: "Rahul Das",
    event: "Long Jump",
    status: "PENDING",
  },
  {
    id: "REG-003",
    athlete: "Alex Smith",
    event: "200m Sprint",
    status: "VERIFIED",
  },
];

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gamex_token");
    localStorage.removeItem("gamex_user");

    navigate("/login");
  };

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <span className="logo-game">GAME</span>
          <span className="logo-x">X</span>
        </div>

        <nav className="sidebar-nav">

          <button
            className="nav-item active"
            onClick={() => navigate("/dashboard")}
          >
            <span>▣</span>
            Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/events")}
          >
            <span>◫</span>
            Events
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/venues")}
          >
            <span>⌂</span>
            Venues
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/registrations")}
          >
            <span>☷</span>
            Registrations
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/matches")}
          >
            <span>⚡</span>
            Matches
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/results")}
          >
            <span>◉</span>
            Results
          </button>

        </nav>

      </aside>

      {/* Main Area */}
      <div className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">

          <div>
            <h1>GameX</h1>
            <span className="header-subtitle">
              Sports Management Platform
            </span>
          </div>

          <div className="header-user">

            <div className="user-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </header>

        {/* Content */}
        <main className="dashboard-content">

          <section className="welcome-section">

            <div>
              <h2>Welcome back, Admin</h2>

              <p>
                Here's what's happening across your GameX platform today.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => navigate("/events/create")}
            >
              + Create Event
            </button>

          </section>

          {/* Statistics */}
          <section className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon events-icon">
                ◫
              </div>

              <div>
                <p>Total Events</p>
                <h3>12</h3>
                <span className="stat-positive">
                  +2 this month
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon athletes-icon">
                ●
              </div>

              <div>
                <p>Total Athletes</p>
                <h3>248</h3>
                <span className="stat-positive">
                  +18 this month
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon registrations-icon">
                ☷
              </div>

              <div>
                <p>Registrations</p>
                <h3>186</h3>
                <span className="stat-positive">
                  +24 this month
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon matches-icon">
                ⚡
              </div>

              <div>
                <p>Matches</p>
                <h3>36</h3>
                <span className="stat-positive">
                  8 scheduled today
                </span>
              </div>
            </div>

          </section>

          {/* Bottom Grid */}
          <section className="dashboard-grid">

            {/* Recent Registrations */}
            <div className="dashboard-card registrations-card">

              <div className="card-header">

                <div>
                  <h3>Recent Registrations</h3>
                  <p>Latest athlete registrations</p>
                </div>

                <button
                  onClick={() => navigate("/registrations")}
                  className="view-all-button"
                >
                  View all
                </button>

              </div>

              <div className="registration-table">

                <div className="table-header">
                  <span>Registration</span>
                  <span>Athlete</span>
                  <span>Event</span>
                  <span>Status</span>
                </div>

                {registrations.map((registration) => (

                  <div
                    className="table-row"
                    key={registration.id}
                  >

                    <span className="registration-id">
                      {registration.id}
                    </span>

                    <span>
                      {registration.athlete}
                    </span>

                    <span>
                      {registration.event}
                    </span>

                    <span>
                      <span
                        className={`status-badge ${registration.status.toLowerCase()}`}
                      >
                        {registration.status}
                      </span>
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Upcoming Events */}
            <div className="dashboard-card upcoming-card">

              <div className="card-header">

                <div>
                  <h3>Upcoming Events</h3>
                  <p>Next competitions</p>
                </div>

                <button
                  onClick={() => navigate("/events")}
                  className="view-all-button"
                >
                  View all
                </button>

              </div>

              <div className="event-list">

                <div className="event-item">

                  <div className="event-date">
                    <strong>25</strong>
                    <span>SEP</span>
                  </div>

                  <div className="event-details">
                    <strong>Bhubaneswar Athletics Meet</strong>
                    <span>Athletics • Kalinga Stadium</span>
                  </div>

                </div>

                <div className="event-item">

                  <div className="event-date">
                    <strong>28</strong>
                    <span>SEP</span>
                  </div>

                  <div className="event-details">
                    <strong>GameX Football Cup</strong>
                    <span>Football • Main Arena</span>
                  </div>

                </div>

                <div className="event-item">

                  <div className="event-date">
                    <strong>03</strong>
                    <span>OCT</span>
                  </div>

                  <div className="event-details">
                    <strong>GameX Swimming Championship</strong>
                    <span>Swimming • Aquatic Centre</span>
                  </div>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default DashboardPage;