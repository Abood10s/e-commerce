import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AdminProtection = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdminValue = localStorage.getItem("isAdmin");
    setIsAdmin(Boolean(isAdminValue));
  }, []);

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminProtection;
