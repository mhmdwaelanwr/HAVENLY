import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { findProperty } from "./data/properties";
import { readPropertyIds, savePropertyIds } from "./utils/propertyStorage";
import "./propertyFeatures.css";

import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import Favorites from "./pages/favorites/Favorites";
import CompareProperties from "./pages/compareProperties/CompareProperties";
import RecentlyViewed from "./pages/recentlyViewed/RecentlyViewed";
import ContactAgent from "./pages/contactAgent/ContactAgent";
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

const FAVORITES_KEY = "havenly.favorites";
const COMPARE_KEY = "havenly.compare";
const RECENT_KEY = "havenly.recentlyViewed";
const COMPARE_LIMIT = 3;
const RECENT_LIMIT = 10;

const propertyLinks = [
  { to: "/properties", label: "Properties" },
  { to: "/favorites", label: "Favorites" },
  { to: "/compare", label: "Compare" },
  { to: "/recently-viewed", label: "Recently Viewed" },
];

const App = () => {
  const [favoriteIds, setFavoriteIds] = useState(() => readPropertyIds(FAVORITES_KEY));
  const [compareIds, setCompareIds] = useState(() => readPropertyIds(COMPARE_KEY, COMPARE_LIMIT));
  const [recentIds, setRecentIds] = useState(() => readPropertyIds(RECENT_KEY, RECENT_LIMIT));

  useEffect(() => {
    savePropertyIds(FAVORITES_KEY, favoriteIds);
  }, [favoriteIds]);

  useEffect(() => {
    savePropertyIds(COMPARE_KEY, compareIds);
  }, [compareIds]);

  useEffect(() => {
    savePropertyIds(RECENT_KEY, recentIds);
  }, [recentIds]);

  function toggleFavorite(id) {
    setFavoriteIds((ids) => {
      if (ids.includes(id)) {
        return ids.filter((savedId) => savedId !== id);
      }

      return [...ids, id];
    });
  }

  function toggleCompare(id) {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((savedId) => savedId !== id));
      return true;
    }
    if (compareIds.length >= COMPARE_LIMIT) return false;

    setCompareIds([...compareIds, id]);
    return true;
  }

  function removeRecent(id) {
    setRecentIds((ids) => ids.filter((viewedId) => viewedId !== id));
  }

  const actions = {
    favoriteIds,
    compareIds,
    compareLimit: COMPARE_LIMIT,
    onToggleFavorite: toggleFavorite,
    onToggleCompare: toggleCompare,
  };

  return (
    <div>
      <Header />
      <nav aria-label="Property navigation" className="property-theme property-nav">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-1 px-4 py-3 sm:gap-3 sm:px-6">
          {propertyLinks.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties actions={actions} />} />
        <Route
          path="/properties/:id"
          element={
            <PropertyDetails
              actions={actions}
              setRecentIds={setRecentIds}
              recentLimit={RECENT_LIMIT}
            />
          }
        />
        <Route path="/properties/:id/contact-agent" element={<ContactAgent />} />
        <Route
          path="/favorites"
          element={<Favorites properties={favoriteIds.map(findProperty)} actions={actions} />}
        />
        <Route
          path="/compare"
          element={
            <CompareProperties
              properties={compareIds.map(findProperty)}
              limit={COMPARE_LIMIT}
              onRemove={toggleCompare}
              onClear={() => setCompareIds([])}
            />
          }
        />
        <Route
          path="/recently-viewed"
          element={
            <RecentlyViewed
              properties={recentIds.map(findProperty)}
              actions={actions}
              onRemove={removeRecent}
              onClear={() => setRecentIds([])}
            />
          }
        />
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
