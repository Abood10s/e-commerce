import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthCtx } from "../../Contexts/AuthContext";
import LoginForm from "../forms/LoginForm";
const ProtectedRoutes = () => {
  const { isAuth } = useContext(AuthCtx);

  return isAuth ? <Outlet /> : <LoginForm />;
};

export default ProtectedRoutes;
