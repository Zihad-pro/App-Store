import React from "react";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";


const HomeLayouts = () => {
  return (
    <div className="bg-gray-50">
      <Navber></Navber>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
       
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
