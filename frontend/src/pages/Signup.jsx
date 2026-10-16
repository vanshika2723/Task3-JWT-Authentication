
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";

export default function Signup({ onAuth }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
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
      const result = await signup(form);
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
        <p className="eyebrow">GET STARTED</p>
        <h1>Create your account</h1>
        <p className="auth-subtitle">
          Join SecureAuth and manage your account securely.
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={submit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={change}
            autoComplete="name"
            maxLength={80}
            required
          />

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

          <label htmlFor="password">Create password</label>
          <div className="password-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              value={form.password}
              onChange={change}
              autoComplete="new-password"
              minLength={8}
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

          <p className="form-hint">
            Use at least 8 characters for your password.
          </p>

          <button className="primary-btn" disabled={busy}>
            {busy ? "Creating account..." : "Create account →"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>

        <div className="secure-note">
          🔒 Your password is securely hashed by the server
        </div>
      </section>
    </main>
  );
}
