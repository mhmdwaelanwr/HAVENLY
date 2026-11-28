import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "./Layout.css";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Properties for sale", to: "/properties?purpose=buy" },
      { label: "Properties for rent", to: "/properties?purpose=rent" },
      { label: "Favorites", to: "/favorites" },
      { label: "Compare properties", to: "/compare" },
      { label: "Recently viewed", to: "/recently-viewed" },
    ],
  },
  {
    title: "HAVENLY",
    links: [
      { label: "About us", to: "/about" },
      { label: "Contact us", to: "/contact" },
      { label: "Sign in", to: "/login" },
      { label: "Create an account", to: "/register" },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">HAVENLY</Link>
          <p>Find your place. Discover homes, shortlist your favorites and explore Egypt's neighborhoods.</p>
          <Link className="footer-list-link" to="/admin/add-property">
            List a property <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HAVENLY</span>
        <span>FIND YOUR PLACE · EGYPT</span>
      </div>
    </footer>
  );
}

export default Footer;
