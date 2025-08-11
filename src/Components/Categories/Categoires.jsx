import React from "react";
import { useLoaderData } from "react-router";
import TrendingApp from "./TrendingApp";
import Education from "./Education";
import Productivity from "./Productivity";
import Health from "./Health";

const Categoires = () => {
  const data = useLoaderData();
  return (
    <div>
      <TrendingApp data={data}></TrendingApp>
      <Productivity data={data}></Productivity>
      <Education data={data}></Education>
      <Health data={data}></Health>
    </div>
  );
};

export default Categoires;
