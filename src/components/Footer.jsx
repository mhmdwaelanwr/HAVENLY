import { Link } from "react-router-dom";
import "./Layout.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link to="/" className="footer-brand">HAVENLY</Link>
        <p>FIND YOUR PLACE. <span aria-hidden="true">·</span> PROPERTY DISCOVERY</p>
      </div>
    </footer>
  );
}

export default Footer;
