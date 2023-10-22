import React, { useEffect, useState } from "react";
import { FirstText, SecondText } from "./utils/Text";
import { Logo } from "./utils/Logo";
import { Blackout } from "./utils/Blackout";
import { ScrollableContent } from "./utils/ScrollableContent";
import useMouseTilt from "@/hooks/useMouseTilt";
import useScrollEffect from "@/hooks/useScrollEffect";
import useSmoothScrollToTarget from "@/hooks/useSmoothScrollToTarget";

const Hero: React.FC<{ hideContent: boolean; scale: number }> = ({
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
      {showElements.firstText && <FirstText opacity={textOpacity} />}
      {showElements.secondText && <SecondText opacity={textOpacity} />}
      {showElements.logo && (
        <Logo scale={scale} onClick={handleLogoClick} logoRef={logoRef} />
      )}
      <ScrollableContent />
      <Blackout opacity={hideContent ? 0 : opacity} />
    </div>
  );
};

export default Hero;
