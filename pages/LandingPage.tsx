"use client";

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Info from "../components/Info";
import useScrollEffect from "../hooks/useScrollEffect";

const LandingPage: React.FC = () => {
  const { scale } = useScrollEffect();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`banner relative flex flex-col items-center justify-center h-screen transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: `scale(${scale})` }}
    >
      <Banner />
      <Info />
    </div>
  );
};

export default LandingPage;
