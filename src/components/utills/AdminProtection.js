import { Navigate } from "react-router-dom";
import AdminDashboard from "../../pages/AdminDashboard";

const AdminProtection = () => {
  const isAdminValue = localStorage.getItem("isAdmin");

  return Boolean(isAdminValue) ? <AdminDashboard /> : <Navigate to="/" />;
};

export default AdminProtection;
