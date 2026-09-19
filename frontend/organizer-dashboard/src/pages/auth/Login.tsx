import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (
      email === "organizer@gamex.com" &&
      password === "GameX@Dev2026!Test"
    ) {
      localStorage.setItem("gamex_authenticated", "true");

      navigate("/dashboard", { replace: true });

      return;
    }

    setError("Invalid email or password.");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">G</div>

          <div>
            <h1>GameX</h1>
            <p>Sports Competition Platform</p>
          </div>
        </div>

        <div className="login-header">
          <h2>Welcome back</h2>

          <p>
            Sign in to your GameX organizer dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="organizer@gamex.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
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
            />
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Sign in
          </button>
        </form>

        <div className="login-footer">
          GameX Organizer Portal
        </div>
      </div>
    </div>
  );
}