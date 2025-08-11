import React from "react";
import { Link } from "react-router";
import "../Animation/Animation.css";
const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row items-center gap-10 p-8">
        {/* Left side: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold tracking-wide">
            404<span className="text-indigo-500">-error</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-4">PAGE NOT FOUND</h2>
          <p className="mt-2 text-gray-400">
            Your search has ventured beyond the known universe.
          </p>
          <button className="mt-6 px-6 py-2 border border-indigo-500 rounded-full hover:bg-indigo-500 transition duration-300">
            <Link to="/">Back To Home</Link>
          </button>
        </div>

        {/* Right side: Astronaut Image */}
        <div>
          <img
            src="/error.png" // Make sure to place the image in your public folder
            alt="Astronaut"
            className=" w-64 h-64 bg-gradient-to-br from-indigo-800 to-black rounded-full flex items-center justify-center shadow-lg animate-float-spin"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
