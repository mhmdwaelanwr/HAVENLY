
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@/havenly/router-compat";
import { FiUser, FiLogOut } from "react-icons/fi";
import logo from "../assets/havenly-logo.svg";
import "./Layout.css";

function AdminHeader({ adminName = "Administrator", onLogout }) {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem("havenly-theme") === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("havenly-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function handleLogout() {
    if (onLogout) {
      onLogout();
    }

    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">

       
        <div className="flex items-center gap-4">
          <Link to="/admin" className="havenly-brand">
            <img src={logo} alt="HAVENLY" width="36" height="36" />
            <span>HAVENLY</span>
          </Link>

          <span
            className="hidden sm:inline-block border-l pl-4 text-sm font-medium tracking-wide"
            style={{
              borderColor: "var(--havenly-border)",
              color: "var(--havenly-muted)",
            }}
          >
            Admin Panel
          </span>
        </div>

        <div className="flex items-center gap-5">

          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Enable dark mode"
                : "Enable light mode"
            }
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>

          <div
            className="hidden sm:flex items-center gap-2"
            style={{ color: "var(--havenly-text)" }}
          >
            <FiUser size={19} />

            <span className="text-sm font-medium">
              {adminName}
            </span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{
              backgroundColor: "var(--havenly-text)",
              color: "var(--havenly-paper)",
            }}
          >
            <FiLogOut size={16} />
            <span>Logout</span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
