"use client";

import React, { useEffect, useState } from "react";
import useScrollEffect from "../hooks/useScrollEffect";

const Banner: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const { scale, opacity, translateY } = useScrollEffect();

  console.log(scale, opacity);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstText(true), 500);
    const timer2 = setTimeout(() => setShowSecondText(true), 2000);
    const timer3 = setTimeout(() => setShowLogo(true), 3500);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      className="banner relative flex items-center justify-center"
      style={{ transform: `scale(${scale}) translateY(${translateY}px)` }}
    >
      <div className="absolute flex flex-col items-center top-36 w-64">
        {showFirstText && (
          <div className="text-white text-3xl font-bold fade-in">
            Better Refs.
          </div>
        )}
        {showSecondText && (
          <div className="text-white text-3xl font-bold fade-in pt-1">
            Better Hockey.
          </div>
        )}
        {showLogo && (
          <div className="mt-8 slide-up logo-container">
            <img src="/logo.png" alt="Logo" />
          </div>
        )}
      </div>
      <div style={{ height: "200vh", background: "transparent" }}>
        Scrollable content
      </div>
      <div className="blackout" style={{ opacity: opacity * 100 }}></div>
    </div>
  );
};

export default Banner;
