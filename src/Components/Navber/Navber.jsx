import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import imageuser from "/user.png";
import { toast } from "react-toastify";

const Navber = () => {
  const scrollToTrending = () => {
    const trendingSection = document.getElementById("trendingApp");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { user, logOut } = use(AuthContext);
  const handlelogout = () => {
    console.log("user logout");
    logOut()
      .then(() => {
        toast.success("You have logout successfully!", { icon: "👋" });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="bg-primary2 shadow-sm ">
      <div className="navbar   max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-sky-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={scrollToTrending}
                  to={window.location.pathname === "/" ? "#" : "/"}
                >
                  App
                </NavLink>
              </li>
              <li>
                {user && (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "underline font-bold" : ""
                    }
                    to="/myprofile"
                  >
                    My Profile
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Appstore.png" className="w-8 md:w-12" alt="" />
            <NavLink to="/" className=" md:text-3xl text-xl flex items-center">
              Appstore
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg">
              <NavLink
                
                onClick={scrollToTrending}
                to={window.location.pathname === "/" ? "#" : "/"}
              >
                App
              </NavLink>
            </li>
            <li className="text-lg">
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline font-bold" : ""
                  }
                  to="/myprofile"
                >
                  My Profile
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="text-xl md:mr-6 mr-1">
            <img
              className="rounded-full max-w-12 border-1 border-green-700"
              src={`${user ? user.photoURL : imageuser}`}
              alt=""
            />
          </div>
          {user ? (
            <button
              onClick={handlelogout}
              className="btn px-9 py-5 text-white bg-primary1  hover:bg-orange-400"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn px-9 py-5 text-white bg-primary1  hover:bg-orange-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
