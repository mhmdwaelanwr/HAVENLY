import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
export default function Layout() { return <><Header/><Navbar/><main className="container"><Outlet/></main><Footer/></>; }
