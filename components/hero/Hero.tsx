import React from "react";

import useMouseTilt from "@/hooks/useMouseTilt";
import useHeroEffects from "@/hooks/useHeroEffects";
import useScrollEffect from "@/hooks/useScrollEffect";
import useSmoothScrollToTarget from "@/hooks/useSmoothScrollToTarget";

import {
  FirstText,
  SecondText,
  Logo,
  Blackout,
  ScrollableContent,
  HandleLogoClick,
} from "./utils";

const Hero: React.FC<{ hideContent: boolean; scale: number }> = ({
  hideContent,
  scale,
}) => {
  const { opacity } = useScrollEffect();
  const { handleScroll } = useSmoothScrollToTarget(171);
  const { showElements, textOpacity } = useHeroEffects(handleScroll);

  const logoRef = useMouseTilt(showElements.logo);
  const cursorPointer = scrollY <= 170;

  return (
    <div
      className="absolute flex flex-col items-center top-36 w-64"
      style={{ opacity: hideContent ? 0 : 1 }}
    >
      {showElements.firstText && <FirstText opacity={textOpacity} />}
      {showElements.secondText && <SecondText opacity={textOpacity} />}
      {showElements.logo && (
        <Logo
          scale={scale}
          onClick={HandleLogoClick}
          logoRef={logoRef}
          cursorPointer={cursorPointer}
        />
      )}
      <ScrollableContent />
      <Blackout opacity={hideContent ? 0 : opacity} />
    </div>
  );
};

export default Hero;
