"use client";

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Info from "../components/Info";
import useScrollEffect from "../hooks/useScrollEffect";

const LandingPage: React.FC = () => {
  const { scale } = useScrollEffect();
  const [fadeIn, setFadeIn] = useState("opacity-0");

  useEffect(() => {
    setFadeIn("opacity-1 transition-opacity duration-1000 ease-in-out");
  }, []);

  return (
    <div
      className={`banner relative flex flex-col items-center justify-center h-screen ${fadeIn}`}
      style={{ transform: `scale(${scale})` }}
    >
      <Banner />
      <Info />
    </div>
  );
};

export default LandingPage;
