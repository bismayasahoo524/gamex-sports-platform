import { useNavigate } from "react-router-dom";

import StatCard from "../../components/dashboard/StatCard";
import RecentRegistrations from "../../components/dashboard/RecentRegistrations";
import SystemStatus from "../../components/dashboard/SystemStatus";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("gamex_authenticated");

    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-topbar">
        <div className="dashboard-brand">
          <div className="dashboard-logo">G</div>

          <div>
            <strong>GameX</strong>
            <span>Organizer Portal</span>
          </div>
        </div>

        <div className="dashboard-user">
          <div className="dashboard-user-info">
            <strong>Organizer</strong>
            <span>organizer@gamex.com</span>
          </div>

          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-heading">
        <div>
          <p className="dashboard-eyebrow">
            GAMEX ORGANIZER
          </p>

          <h1>Registration Dashboard</h1>

          <p className="dashboard-description">
            Monitor athlete registrations and competition activity in real
            time.
          </p>
        </div>

        <div className="dashboard-live">
          <span className="live-dot"></span>
          Live
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Registrations"
          value="1,284"
          subtitle="↑ 12.4% this month"
          icon="👥"
        />

        <StatCard
          title="Pending"
          value="186"
          subtitle="23 new today"
          icon="⏳"
        />

        <StatCard
          title="Approved"
          value="1,024"
          subtitle="91.2% approval rate"
          icon="✓"
        />

        <StatCard
          title="Rejected"
          value="74"
          subtitle="5.7% of registrations"
          icon="!"
        />
      </div>

      <div className="dashboard-grid">
        <RecentRegistrations />

        <SystemStatus />
      </div>
    </div>
  );
}