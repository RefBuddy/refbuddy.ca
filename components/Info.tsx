import React from "react";
import useScrollEffect from "../hooks/useScrollEffect";

const Info: React.FC = () => {
  const { opacity } = useScrollEffect();

  return (
    <div>
      <div style={{ height: "200vh", background: "transparent" }}>
        Scrollable content
      </div>
      <div className="blackout" style={{ opacity: opacity }}></div>
    </div>
  );
};

export default Info;
