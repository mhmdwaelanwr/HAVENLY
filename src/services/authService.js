const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const USE_MOCK = true;

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
  if (!res.ok)
    throw new Error(data.message || "Something went wrong, please try again");
  return data;
}

const realApi = {
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

const USERS_KEY = "havenly.mockUsers";

const seedUsers = [
  {
    id: 1,
    full_name: "Demo Member",
    email: "member@havenly.com",
    password: "123456",
    phone: "01000000001",
    role: "member",
  },
  {
    id: 2,
    full_name: "Demo Owner",
    email: "owner@havenly.com",
    password: "123456",
    phone: "01000000002",
    role: "owner",
  },
];

const wait = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

function readUsers() {
  try {
    const saved = JSON.parse(localStorage.getItem(USERS_KEY));
    return Array.isArray(saved) ? saved : seedUsers;
  } catch {
    return seedUsers;
  }
}

function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function publicUser(user) {
  const copy = { ...user };
  delete copy.password;
  return copy;
}

function currentUserId() {
  const token = localStorage.getItem("token") || "";
  return token.replace("mock-", "");
}

const mockApi = {
  async register({ full_name, email, password, phone, role }) {
    await wait();
    const users = readUsers();
    const exists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    );
    if (exists) throw new Error("This email is already registered");

    const user = {
      id: Date.now(),
      full_name,
      email,
      password,
      phone,
      role: role || "member",
    };
    writeUsers([...users, user]);
    return { token: `mock-${user.id}`, user: publicUser(user) };
  },

  async login({ email, password }) {
    await wait();
    const user = readUsers().find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!user) throw new Error("Invalid email or password");
    return { token: `mock-${user.id}`, user: publicUser(user) };
  },

  async getProfile() {
    await wait(200);
    const user = readUsers().find((u) => String(u.id) === currentUserId());
    if (!user) throw new Error("Session expired");
    return publicUser(user);
  },

  async updateProfile(data) {
    await wait();
    const users = readUsers();
    const index = users.findIndex((u) => String(u.id) === currentUserId());
    if (index === -1) throw new Error("Session expired");

    const updated = {
      ...users[index],
      full_name: data.full_name ?? users[index].full_name,
      phone: data.phone ?? users[index].phone,
    };
    users[index] = updated;
    writeUsers(users);
    return publicUser(updated);
  },
};

export const authService = USE_MOCK ? mockApi : realApi;
