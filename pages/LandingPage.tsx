"use client";

import React, { useState, useEffect } from "react";

import Hero from "@/components/hero/Hero";
import Info from "@/components/info/Info";

import useScrollEffect from "@/hooks/useScrollEffect";
import useScrollPosition from "@/hooks/useScrollPosition";

const LandingPage: React.FC = () => {
  const scrollEffect = useScrollEffect();
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [infoFadeClass, setInfoFadeClass] = useState("");
  const scrollY = useScrollPosition();

  useEffect(() => {
    setIsLoaded(true);
    const fadeTimeout = setTimeout(() => {
      setFadeClass("instant"); // Switch to instant class after initial fade-in
    }, 1000); // Transition duration
    return () => clearTimeout(fadeTimeout);
  }, []);

  useEffect(() => {
    if (scrollY > 170 && infoFadeClass !== "fade-in-long") {
      setInfoFadeClass("fade-in-long");
    }
  }, [scrollY, infoFadeClass]);

  const hideHeroContent = scrollY > 170;

  return (
    <>
      <div
        className={`hero-bg ${fadeClass}`}
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
        {scrollY > 170 && <Info className={infoFadeClass} />}
      </div>
    </>
  );
};

export default LandingPage;
