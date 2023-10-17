import React, { useEffect, useState } from "react";
import useMouseTilt from "../hooks/useMouseTilt";

const Banner: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const logoRef = useMouseTilt(showLogo);

  const handleLogoClick = () => {
    window.scrollTo({
      top: window.scrollY + 170,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstText(true), 100);
    const timer2 = setTimeout(() => setShowSecondText(true), 1500);
    const timer3 = setTimeout(() => setShowLogo(true), 3000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="absolute flex flex-col items-center top-36 w-64">
      {showFirstText && (
        <div className="text-white text-3xl font-bold fade-in select-none">
          Better Refs.
        </div>
      )}
      {showSecondText && (
        <div className="text-white text-3xl font-bold fade-in pt-1 select-none">
          Better Hockey.
        </div>
      )}
      {showLogo && (
        <div
          className="mt-8 slide-up logo-container cursor-pointer"
          onClick={handleLogoClick}
          ref={logoRef}
        >
          <div className="logo-shine"></div>
          <img src="/logo.png" alt="Logo" />
        </div>
      )}
    </div>
  );
};

export default Banner;
