import React from "react";
import Navber from "../Components/Navber/Navber";
import Login from "../Pages/Login";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const AuthLayouts = () => {
  return (
    <div>
      <header>
        <Navber />
      </header>
      <main>
        <Outlet></Outlet>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </main>
    </div>
  );
};

export default AuthLayouts;
