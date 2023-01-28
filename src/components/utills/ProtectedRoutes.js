import React from "react";
import { Outlet } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const ProtectedRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <LoginForm />;
};

export default ProtectedRoutes;
