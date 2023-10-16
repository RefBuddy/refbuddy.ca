"use client";

import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

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
    <div className="banner relative flex items-center justify-center">
      <div className="absolute flex flex-col items-center top-36 w-64">
        {showFirstText && (
          <div className="text-white text-3xl font-bold fade-in">
            Better Refs.
          </div>
        )}
        {showSecondText && (
          <div className="text-white text-3xl font-bold fade-in ">
            Better Hockey.
          </div>
        )}
        {showLogo && (
          <img
            src="/logo.png"
            alt="Logo"
            className="mt-20 slide-up"
            width="150"
            height="150"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
