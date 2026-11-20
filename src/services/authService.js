const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "حصلت مشكلة، حاول تاني");
  return data;
}

export const authService = {
  register: ({ full_name, email, password, phone, role }) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify({ full_name, email, password, phone, role }),
    }),
  login: ({ email, password }) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  getProfile: () => request("/users/me"),
  updateProfile: (data) =>
    request("/users/me", { method: "PATCH", body: JSON.stringify(data) }),
};
