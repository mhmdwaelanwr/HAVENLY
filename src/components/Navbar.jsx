import { NavLink } from 'react-router-dom';
const links = [['/','Home'],['/properties','Properties'],['/favorites','Favorites'],['/compare','Compare'],['/dashboard','Dashboard'],['/contact','Contact']];
export default function Navbar() { return <nav className="site-nav" aria-label="Main navigation">{links.map(([path,label])=><NavLink key={path} end={path==='/'} to={path}>{label}</NavLink>)}</nav>; }
