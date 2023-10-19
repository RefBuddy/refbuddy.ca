"use client";

import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Info from "../components/Info";
import useScrollEffect from "../hooks/useScrollEffect";

const LandingPage: React.FC = () => {
  const { scale } = useScrollEffect();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  let rafId: number | null = null;

  const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

  const handleScroll = () => {
    if (window.scrollY > 171 && !rafId) {
      rafId = requestAnimationFrame(smoothScrollToTarget);
    } else {
      setScrollY(window.scrollY);
    }
  };

  const smoothScrollToTarget = () => {
    const currentScroll = window.scrollY;
    const targetScroll = 171;
    const newScroll = lerp(currentScroll, targetScroll, 0.1);

    if (Math.abs(newScroll - currentScroll) < 0.5) {
      window.scrollTo(0, targetScroll);
      cancelAnimationFrame(rafId!);
      rafId = null;
      return;
    }

    window.scrollTo(0, newScroll);
    rafId = requestAnimationFrame(smoothScrollToTarget);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
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
        <Banner hideContent={hideBannerContent} scale={scale} />
        {scrollY > 170 && <Info />}
      </div>
    </>
  );
};

export default LandingPage;
