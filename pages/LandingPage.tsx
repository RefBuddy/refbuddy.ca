"use client";

import React, { useState, useEffect } from "react";

import Hero from "@/components/hero/Hero";
import Info from "@/components/Info";

import useScrollEffect from "@/hooks/useScrollEffect";
import useScrollPosition from "@/hooks/useScrollPosition";

const LandingPage: React.FC = () => {
  const scrollEffect = useScrollEffect();
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const hideHeroContent = scrollY > 170;

  return (
    <>
      <div
        className="hero-bg"
        style={{
          opacity: scrollY > 170 ? 0 : 1,
        }}
      ></div>
      <div
        className={`relative flex flex-col items-center justify-center h-screen ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform:
            scrollY <= 170 ? `scale(${scrollEffect.scale})` : "scale(1)",
        }}
      >
        <Hero hideContent={hideHeroContent} scale={scrollEffect.scale} />
        {scrollY > 170 && <Info />}
      </div>
    </>
  );
};

export default LandingPage;
