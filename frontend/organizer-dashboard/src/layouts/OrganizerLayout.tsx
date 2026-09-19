import type { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface OrganizerLayoutProps {
  children: ReactNode;
}

export default function OrganizerLayout({
  children,
}: OrganizerLayoutProps) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("gamex_authenticated");
    localStorage.removeItem("gamex_user");
    localStorage.removeItem("gamex_token");

    navigate("/login", {
      replace: true,
    });
  }

  return (
    <div className="organizer-layout">
      <header className="organizer-header">
        <div className="organizer-brand">
          <strong>GAME X</strong>
        </div>

        <nav className="organizer-nav">
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/organizer/registrations">
            Registrations
          </NavLink>

          <button
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="organizer-content">
        {children}
      </main>
    </div>
  );
}