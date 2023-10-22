import React, { useEffect, useState } from "react";
import useMouseTilt from "../hooks/useMouseTilt";
import useScrollEffect from "../hooks/useScrollEffect";
import useSmoothScrollToTarget from "../hooks/useSmoothScrollToTarget";

const Banner: React.FC<{ hideContent: boolean; scale: number }> = ({
  hideContent,
  scale,
}) => {
  const { opacity } = useScrollEffect();
  const { handleScroll } = useSmoothScrollToTarget(171);

  const [showElements, setShowElements] = useState({
    firstText: false,
    secondText: false,
    logo: false,
    cursorPointer: true,
  });

  const [textOpacity, setTextOpacity] = useState(1);

  const logoRef = useMouseTilt(showElements.logo);

  const handleLogoClick = () => {
    if (window.scrollY <= 0) {
      window.scrollTo({
        top: window.scrollY + 171,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
      setShowElements((prev) => ({
        ...prev,
        cursorPointer: window.scrollY <= 0,
      }));

      setTextOpacity(window.scrollY > 0 ? 0 : 1);
    };

    window.addEventListener("scroll", handleScrollEvent);

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
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className="absolute flex flex-col items-center top-36 w-64"
      style={{ opacity: hideContent ? 0 : 1 }}
    >
      {showElements.firstText && (
        <div
          className="text-white text-3xl font-bold fade-in select-none"
          style={{ opacity: textOpacity }}
        >
          Better Refs.
        </div>
      )}
      {showElements.secondText && (
        <div
          className="text-white text-3xl font-bold fade-in pt-1 select-none"
          style={{ opacity: textOpacity }}
        >
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
          <img
            src="/logo.png"
            alt="Logo"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      )}
      <div
        className="pointer-events-none bg-transparent text-transparent"
        style={{
          height: "200vh",
        }}
      >
        Scrollable content
      </div>
      <div
        className="blackout"
        style={{ opacity: hideContent ? 0 : opacity }}
      ></div>
    </div>
  );
};

export default Banner;
