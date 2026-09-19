import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (
      email === "organizer@gamex.com" &&
      password === "GameX@Dev2026!Test"
    ) {
      localStorage.setItem(
        "gamex_authenticated",
        "true"
      );

      localStorage.setItem(
        "gamex_user",
        email
      );

      navigate("/dashboard", {
        replace: true,
      });

      return;
    }

    setError("Invalid email or password");
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-brand">
          <div className="gamex-logo">
            GX
          </div>

          <h1>GameX</h1>

          <p>
            Sports Event Management Platform
          </p>
        </div>

        <div className="login-header">
          <h2>Welcome back</h2>

          <p>
            Sign in to your organizer account
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="organizer@gamex.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>

        <div className="login-footer">
          GameX Organizer Portal
        </div>

      </div>
    </div>
  );
}