"use client";

import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstText(true), 500); // Delay of 500ms
    const timer2 = setTimeout(() => setShowSecondText(true), 2000); // Delay of 1500ms

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
      </div>
    </div>
  );
};

export default Banner;
