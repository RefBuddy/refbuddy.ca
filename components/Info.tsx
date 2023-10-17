import React from "react";
import useScrollEffect from "../hooks/useScrollEffect";

const Info: React.FC = () => {
  const { opacity } = useScrollEffect();

  // Calculate refBuddyOpacity based on scroll position
  const refBuddyOpacity = Math.max(0, opacity - 0.7) * 3.33;
  const isPointer = refBuddyOpacity === 0 ? "cursor-pointer" : "";

  const handleLogoClick = () => {
    if (isPointer === "") return;

    window.scrollTo({
      top: window.scrollY + 170,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className={`text-white text-xs font-bold z-50 absolute pt-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isPointer} select-none`}
        style={{ opacity: refBuddyOpacity }}
        onClick={handleLogoClick}
      >
        Ref Buddy
      </div>

      <div style={{ height: "200vh", background: "transparent" }}>
        Scrollable content
      </div>
      <div className="blackout" style={{ opacity: opacity }}></div>
    </div>
  );
};

export default Info;
