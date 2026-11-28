import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import logo from "../assets/havenly-logo.svg";
import useTheme from "../hooks/useTheme";
import "./Layout.css";

const navigationLinks = [
  { label: "Home", to: "/", end: true },
  { label: "Properties", to: "/properties" },
  { label: "Favorites", to: "/favorites" },
  { label: "Compare", to: "/compare" },
  { label: "Recently Viewed", to: "/recently-viewed" },
  { label: "About", to: "/about" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKey(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutside(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header-inner">
        <Link to="/" className="havenly-brand" onClick={closeMenu}>
          <img src={logo} alt="" width="36" height="36" />
          <span>HAVENLY</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="havenly-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
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
              aria-pressed={theme === "dark"}
              aria-label="Dark mode"
              title={theme === "light" ? "Enable dark mode" : "Enable light mode"}
            >
              {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
              <span className="mobile-theme-label">
                {theme === "light" ? "Dark mode" : "Light mode"}
              </span>
            </button>
            <Link to="/login" className="sign-in-link" onClick={closeMenu}>
              Sign in
            </Link>
            <Link to="/admin/add-property" className="list-property-button" onClick={closeMenu}>
              List a property <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
