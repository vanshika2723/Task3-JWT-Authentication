
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login({ onAuth }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const result = await login(form);
      onAuth(result.user);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-layout">
      <section className="auth-card">
        <div className="auth-icon">✦</div>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Login to your account</h1>
        <p className="auth-subtitle">
          Enter your details to access your secure dashboard.
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={submit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={change}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={form.password}
              onChange={change}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className="primary-btn" disabled={busy}>
            {busy ? "Logging in..." : "Login →"}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Create account</Link>
        </div>

        <div className="secure-note">🔒 Your session is securely protected</div>
      </section>
    </main>
  );
}
