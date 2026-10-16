const API_URL = "https://task3-jwt-authentication.onrender.com/api/auth";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const signup = (form) =>
  request("/signup", {
    method: "POST",
    body: JSON.stringify(form),
  });

export const login = (form) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify(form),
  });

export const getMe = () => request("/me");

export const logout = () =>
  request("/logout", { method: "POST" });