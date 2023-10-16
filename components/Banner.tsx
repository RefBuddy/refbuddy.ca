import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="banner relative flex items-center justify-center">
      <div className="absolute top-40 text-white text-3xl font-bold">
        Better Refs.
      </div>
      <div className="absolute top-48 text-white text-3xl font-bold">
        Better Hockey.
      </div>
    </div>
  );
};

export default Banner;
