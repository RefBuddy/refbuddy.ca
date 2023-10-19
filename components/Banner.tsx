import React, { useEffect, useState } from "react";
import useMouseTilt from "../hooks/useMouseTilt";

const Banner: React.FC = () => {
  const [showElements, setShowElements] = useState({
    firstText: false,
    secondText: false,
    logo: false,
    cursorPointer: true,
  });

  const logoRef = useMouseTilt(showElements.logo);

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
      setShowElements((prev) => ({
        ...prev,
        cursorPointer: window.scrollY <= 0,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    const timer1 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, firstText: true })),
      800
    );
    const timer2 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, secondText: true })),
      1800
    );
    const timer3 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, logo: true })),
      3000
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute flex flex-col items-center top-36 w-64">
      {showElements.firstText && (
        <div className="text-white text-3xl font-bold fade-in select-none">
          Better Refs.
        </div>
      )}
      {showElements.secondText && (
        <div className="text-white text-3xl font-bold fade-in pt-1 select-none">
          Better Hockey.
        </div>
      )}
      {showElements.logo && (
        <div
          className={`mt-8 slide-up logo-container ${
            showElements.cursorPointer ? "cursor-pointer" : ""
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
