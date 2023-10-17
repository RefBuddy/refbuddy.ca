"use client";

import React from "react";
import Banner from "../components/Banner";
import Info from "../components/Info";
import useScrollEffect from "../hooks/useScrollEffect";

const LandingPage: React.FC = () => {
  const { scale } = useScrollEffect();

  return (
    <div
      className="banner relative flex items-center justify-center"
      style={{ transform: `scale(${scale})` }}
    >
      <Banner />
      <Info />
    </div>
  );
};

export default LandingPage;
