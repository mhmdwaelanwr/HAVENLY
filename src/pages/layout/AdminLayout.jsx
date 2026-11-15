import { Routes, Route } from "react-router-dom";

import Adminsidebar from "../../components/Adminsidebar";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import MyListings from './../admin/MyListings';
import AddProperty from './../addProperty/AddProperty';
import EditProperty from './../editProperty/EditProperty';
import AdminHeader from './../../components/AdminHeader';

const AdminLayout = () => {
  return (
    <div>
        <AdminHeader />
        <div className="flex min-h-screen">
      <Adminsidebar />
       <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="my-listings" element={<MyListings />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="edit-property/:id" element={<EditProperty />} />
        </Routes>
      </main>
    </div></div>
    
  );
};

export default AdminLayout;