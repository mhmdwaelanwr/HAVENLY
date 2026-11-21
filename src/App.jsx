import { Routes, Route, Outlet, Navigate, useParams } from "react-router-dom";

import Header from "./havenly/components/Header";
import Footer from "./havenly/components/Footer";
import AdminHeader from "./havenly/components/AdminHeader";
import Adminsidebar from "./havenly/components/Adminsidebar";

import {
  HavenlyProvider,
  useHavenly,
  COMPARE_LIMIT,
  RECENT_LIMIT,
} from "./havenly/HavenlyContext";

import Home from "./havenly/pages/home/Home";
import Properties from "./havenly/pages/properties/Properties";
import PropertyDetails from "./havenly/pages/propertyDetails/PropertyDetails";
import ContactAgent from "./havenly/pages/contactAgent/ContactAgent";
import Favorites from "./havenly/pages/favorites/Favorites";
import CompareProperties from "./havenly/pages/compareProperties/CompareProperties";
import RecentlyViewed from "./havenly/pages/recentlyViewed/RecentlyViewed";
import Login from "./havenly/pages/login/Login";
import Register from "./havenly/pages/register/Register";
import Profile from "./havenly/pages/profile/Profile";
import Contact from "./havenly/pages/contact/Contact";
import About from "./havenly/pages/about/About";
import NotFound from "./havenly/pages/notFound/NotFound";

import Dashboard from "./havenly/pages/admin/Dashboard";
import Users from "./havenly/pages/admin/Users";
import MyListings from "./havenly/pages/admin/MyListings";
import AddProperty from "./havenly/pages/addProperty/AddProperty";
import EditProperty from "./havenly/pages/editProperty/EditProperty";

import "./havenly/propertyFeatures.css";

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <div className="flex min-h-screen">
        <Adminsidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const HomePage = () => <Home actions={useHavenly().actions} />;

const PropertiesPage = () => <Properties actions={useHavenly().actions} />;

const PropertyDetailsPage = () => {
  const h = useHavenly();
  return (
    <PropertyDetails
      actions={h.actions}
      setRecentIds={h.setRecentIds}
      recentLimit={RECENT_LIMIT}
    />
  );
};

const FavoritesPage = () => {
  const h = useHavenly();
  return <Favorites properties={h.resolve(h.favoriteIds)} actions={h.actions} />;
};

const ComparePage = () => {
  const h = useHavenly();
  return (
    <CompareProperties
      properties={h.resolve(h.compareIds)}
      limit={COMPARE_LIMIT}
      onRemove={h.actions.onToggleCompare}
      onClear={() => h.setCompareIds([])}
    />
  );
};

const RecentlyViewedPage = () => {
  const h = useHavenly();
  return (
    <RecentlyViewed
      properties={h.resolve(h.recentIds)}
      actions={h.actions}
      onRemove={(id) => h.setRecentIds((ids) => ids.filter((x) => x !== id))}
      onClear={() => h.setRecentIds([])}
    />
  );
};

const EditRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/admin/edit-property/${id}`} replace />;
};

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:id" element={<PropertyDetailsPage />} />
        <Route path="/properties/:id/contact-agent" element={<ContactAgent />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/recently-viewed" element={<RecentlyViewedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="my-listings" element={<MyListings />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="edit-property/:id" element={<EditProperty />} />
      </Route>

      <Route path="/add-property" element={<Navigate to="/admin/add-property" replace />} />
      <Route path="/properties/:id/edit" element={<EditRedirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { HavenlyProvider };
