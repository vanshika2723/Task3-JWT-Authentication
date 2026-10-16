
import { useNavigate } from "react-router-dom";
import { logout } from "../api";

export default function Dashboard({ user, onAuth }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      onAuth(null);
      navigate("/login", { replace: true });
    }
  }

  const initials = (user?.name || "User")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="dashboard-layout">
      <section className="dashboard-card">
        <div className="dashboard-top">
          <div className="profile-avatar">{initials}</div>
          <span className="security-badge">
            <span className="status-dot"></span>
            Authenticated
          </span>
        </div>

        <p className="eyebrow">SECURE DASHBOARD</p>
        <h1>Welcome, {user?.name || "User"}! 👋</h1>
        <p className="dashboard-subtitle">
          You are logged in. Your account is ready to use.
        </p>

        <div className="account-details">
          <div className="detail-row">
            <span>Full name</span>
            <strong>{user?.name || "Not available"}</strong>
          </div>
          <div className="detail-row">
            <span>Email address</span>
            <strong>{user?.email || "Not available"}</strong>
          </div>
          <div className="detail-row">
            <span>Account status</span>
            <strong className="active-status">Active</strong>
          </div>
          <div className="detail-row">
            <span>Session security</span>
            <strong>HTTP-only cookie</strong>
          </div>
        </div>

        <div className="dashboard-notice">
          <span>🔐</span>
          <div>
            <strong>Your session is protected</strong>
            <p>
              This page requires authentication from your backend server.
            </p>
          </div>
        </div>

        <button className="primary-btn logout-btn" onClick={handleLogout}>
          Logout securely →
        </button>
      </section>
    </main>
  );
}
