import { Link, useNavigate } from "react-router-dom";

export default function PublicNavbar() {
  const navigate = useNavigate();

  const authenticated =
    localStorage.getItem("gamex_authenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("gamex_authenticated");
    navigate("/");
  };

  return (
    <header className="gx-navbar">
      <div className="gx-navbar-inner">
        <Link to="/" className="gx-logo">
          <span className="gx-logo-mark">G</span>
          <span>GameX</span>
        </Link>

        <nav className="gx-nav-links">
          <Link to="/games">Games</Link>
          <Link to="/events">Events</Link>
          <Link to="/live">Live</Link>
          <Link to="/results">Results</Link>
          <Link to="/my-registrations">My Registrations</Link>
        </nav>

        <div className="gx-nav-actions">
          {authenticated ? (
            <>
              <Link to="/profile" className="gx-profile-button">
                Profile
              </Link>

              <button
                type="button"
                className="gx-login-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="gx-login-link">
                Login
              </Link>

              <Link to="/signup" className="gx-login-button">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}