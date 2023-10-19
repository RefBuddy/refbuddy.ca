import React from "react";
import useScrollEffect from "../hooks/useScrollEffect";

const Info: React.FC = () => {
  const { opacity } = useScrollEffect();

  // Calculate refBuddyOpacity based on scroll position
  const refBuddyOpacity = Math.max(0, opacity - 0.7) * 3.33;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex w-4/5 justify-between mt-12 mb-6 z-50 relative">
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex-none w-1/3">
          <h2 className="text-xl font-semibold mb-4">Card Title</h2>
          <p>Some description for this card. You can customize this content.</p>
        </div>
      </div>

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
