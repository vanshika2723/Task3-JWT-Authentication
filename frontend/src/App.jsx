import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { getMe } from "./api";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./index.css";

function AppContent() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((result) => setUser(result.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand">SecureAuth</Link>
        <div>
          <Link to="/login">Login</Link>
          {" · "}
          <Link to="/signup">Sign up</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main className="hero">
              <h1>Secure Authentication</h1>
              <p>JWT sessions, password hashing and protected routes.</p>
              <Link className="cta" to="/signup">Get Started</Link>
            </main>
          }
        />

        <Route
          path="/signup"
          element={
            loading ? <p className="message">Loading...</p> :
            user ? <Navigate to="/dashboard" replace /> :
            <Signup onAuth={setUser} />
          }
        />

        <Route
          path="/login"
          element={
            loading ? <p className="message">Loading...</p> :
            user ? <Navigate to="/dashboard" replace /> :
            <Login onAuth={setUser} />
          }
        />

        <Route element={<ProtectedRoute user={user} loading={loading} />}>
          <Route
            path="/dashboard"
            element={<Dashboard user={user} onAuth={setUser} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}