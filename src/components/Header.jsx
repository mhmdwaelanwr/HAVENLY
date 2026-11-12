import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/havenly-logo.svg";
import "./Layout.css";

const navigationLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Properties", to: "/properties" },
  { label: "Favorites", to: "/favorites" },
  { label: "About", to: "/about" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("havenly-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("havenly-theme", theme);
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="havenly-brand" onClick={closeMenu}>
          <img src={logo} alt="" width="36" height="36" />
          <span>HAVENLY</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="havenly-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="havenly-navigation"
          className={"site-navigation" + (menuOpen ? " is-open" : "")}
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  "navigation-link" + (isActive ? " active" : "")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="navigation-actions">
            <button
              type="button"
              className="theme-button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
              title={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? "☾" : "☀"}
            </button>
            <Link to="/login" className="sign-in-link" onClick={closeMenu}>
              Sign in
            </Link>
            <Link to="/add-property" className="list-property-button" onClick={closeMenu}>
              List a property <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
