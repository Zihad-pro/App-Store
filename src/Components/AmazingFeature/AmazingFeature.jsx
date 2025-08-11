import React from "react";
import { FaFlask, FaLaptop, FaPlane, FaCog } from "react-icons/fa";

const AppstoreDetails = () => {
  const features = [
    {
      icon: <FaFlask className="text-cyan-400 text-3xl" />,
      title: "Easy to Install",
      desc: "Quick and simple setup process with minimal configuration needed.",
    },
    {
      icon: <FaLaptop className="text-cyan-400 text-3xl" />,
      title: "Responsive Design",
      desc: "All app responsive desgin .Try Desktop,Tab,Moblie",
    },
    {
      icon: <FaPlane className="text-cyan-400 text-3xl" />,
      title: "Perfect Showcase",
      desc: "Present your product or service in a clean and professional layout",
    },
    {
      icon: <FaCog className="text-cyan-400 text-3xl" />,
      title: "App Store Support",
      desc: " We’re here to help anytime, day or night — all year round (24/7) .",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-light mb-2">Some Amazing Features</h2>
      <div className="h-1 w-16 bg-gray-400 mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
          >
            <div className="w-20 h-20 rounded-full border-4 border-gray-400 flex items-center justify-center mb-4 shadow">
              {feature.icon}
            </div>
            <h4 className="text-md font-semibold uppercase">{feature.title}</h4>
            <p className="text-gray-500 text-sm mt-2 px-4">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppstoreDetails;
