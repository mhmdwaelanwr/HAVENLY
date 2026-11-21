import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RoleRoute({ allowedRoles }) {
  const { role, isAuthenticated, loading } = useAuth();

  if (loading) return <p>جاري التحميل...</p>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return <Outlet />;
}
