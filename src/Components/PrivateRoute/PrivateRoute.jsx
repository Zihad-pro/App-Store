import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
const loaction =useLocation();
console.log(loaction);


  // console.log(user);
  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
