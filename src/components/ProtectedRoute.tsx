import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth) return null;
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
