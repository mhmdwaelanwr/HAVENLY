import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import Favorites from "./pages/favorites/Favorites";
import CompareProperties from "./pages/compareProperties/CompareProperties";
import AddProperty from "./pages/addProperty/AddProperty";
import EditProperty from "./pages/editProperty/EditProperty";
import MyListings from "./pages/myListings/MyListings";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<CompareProperties />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/properties/:id/edit" element={<EditProperty />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
