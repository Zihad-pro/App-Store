import React from "react";
import { MdFileDownload } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router";
const TrendingApp = ({ data }) => {
  const trendingApps = data?.Trending || [];
  return (
    <div id="trendingApp">
      <h2 className="md:text-5xl py-10 text-2xl">Trending App</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4">
        {trendingApps.map((trending) => (
          <div key={trending.id}>
            <Link to={`/pagedetails/${trending.id}`}>
              <div className="card bg-base-100 w- shadow-sm hover:scale-105">
                <figure className="bg-primary2">
                  <img
                    className="h-30 my-10 rounded-3xl"
                    src={trending.thumbnail}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{trending.name}</h2>
                  <div className="flex justify-between ">
                    <p className="flex  gap-1">
                      {trending.rating}
                      <IoStarSharp size={17} />
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p className="flex items-center gap-1">
                      <MdFileDownload />
                      {trending.downloads}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingApp;
