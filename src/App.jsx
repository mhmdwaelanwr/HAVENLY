import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/home/Home.jsx';
import Properties from './pages/properties/Properties.jsx';
import PropertyDetails from './pages/propertyDetails/PropertyDetails.jsx';
import Favorites from './pages/favorites/Favorites.jsx';
import CompareProperties from './pages/compareProperties/CompareProperties.jsx';
import AddProperty from './pages/addProperty/AddProperty.jsx';
import EditProperty from './pages/editProperty/EditProperty.jsx';
import MyListings from './pages/myListings/MyListings.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import NotFound from './pages/notFound/NotFound.jsx';

export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="properties" element={<Properties/>}/><Route path="properties/:id" element={<PropertyDetails/>}/><Route path="favorites" element={<Favorites/>}/><Route path="compare" element={<CompareProperties/>}/><Route path="properties/new" element={<AddProperty/>}/><Route path="properties/:id/edit" element={<EditProperty/>}/><Route path="my-listings" element={<MyListings/>}/><Route path="dashboard" element={<Dashboard/>}/><Route path="login" element={<Login/>}/><Route path="register" element={<Register/>}/><Route path="profile" element={<Profile/>}/><Route path="contact" element={<Contact/>}/><Route path="about" element={<About/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
