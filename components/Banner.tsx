import React, { useEffect, useState } from "react";
import useMouseTilt from "../hooks/useMouseTilt";

const Banner: React.FC = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isCursorPointer, setIsCursorPointer] = useState(true);

  const logoRef = useMouseTilt(showLogo);

  const handleLogoClick = () => {
    if (window.scrollY <= 0) {
      window.scrollTo({
        top: window.scrollY + 170,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsCursorPointer(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    const timer1 = setTimeout(() => setShowFirstText(true), 800);
    const timer2 = setTimeout(() => setShowSecondText(true), 1800);
    const timer3 = setTimeout(() => setShowLogo(true), 3000);

    // Cleanup timers and event listener on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("scroll", handleScroll);
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
          className={`mt-8 slide-up logo-container ${
            isCursorPointer ? "cursor-pointer" : ""
          }`}
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
