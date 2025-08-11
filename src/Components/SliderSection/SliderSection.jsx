import React, { useEffect, useState } from "react";

const slides = [
  "slider2.jpg",
  "slider1.png",
 "slider3.png",
  
];

const SliderSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full pb-15">
      <p className="md:text-5xl text-2xl py-10 "> New App lanched  </p>
      {slides.map((img, i) => (
        <div
          key={i}
          className={`carousel-item w-full ${i === index ? "block" : "hidden"}`}
        >
          <img src={img} className="w-full object-cover" />
        </div>
      ))}

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
    </div>
  );
};

export default SliderSection;
