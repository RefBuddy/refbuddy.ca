"use client";

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Info from "../components/Info";
import useScrollEffect from "../hooks/useScrollEffect";

const LandingPage: React.FC = () => {
  const { scale } = useScrollEffect();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideBannerContent = scrollY > 170;

  return (
    <>
      <div
        className="banner-bg"
        style={{
          opacity: scrollY > 170 ? 0 : 1,
        }}
      ></div>
      <div
        className={`relative flex flex-col items-center justify-center h-screen ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: scrollY <= 170 ? `scale(${scale})` : "scale(1)",
        }}
      >
        <Banner hideContent={hideBannerContent} />
        {scrollY > 170 && <Info />}
      </div>
    </>
  );
};

export default LandingPage;
