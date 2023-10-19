import React from "react";
import useScrollEffect from "../hooks/useScrollEffect";

const Info: React.FC = () => {
  const { opacity } = useScrollEffect();

  // Calculate refBuddyOpacity based on scroll position
  const refBuddyOpacity = Math.max(0, opacity - 0.7) * 3.33;

  return (
    <div>
      <div
        className={`text-white text-xs font-bold z-50 absolute pt-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
        style={{ opacity: refBuddyOpacity }}
      >
        Ref Buddy
      </div>
    </div>
  );
};

export default Info;
