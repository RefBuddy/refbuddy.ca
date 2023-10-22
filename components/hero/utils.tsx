import React from "react";

// FirstText Component
export const FirstText: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <div
      className="text-white text-3xl font-bold fade-in select-none"
      style={{ opacity: opacity }}
    >
      Better Refs.
    </div>
  );
};

// SecondText Component
export const SecondText: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <div
      className="text-white text-3xl font-bold fade-in pt-1 select-none"
      style={{ opacity: opacity }}
    >
      Better Hockey.
    </div>
  );
};

// Logo Component
export const Logo: React.FC<{
  scale: number;
  onClick: () => void;
  logoRef: any;
}> = ({ scale, onClick, logoRef }) => {
  return (
    <div
      className="mt-8 slide-up logo-container cursor-pointer"
      onClick={onClick}
      ref={logoRef}
    >
      <div className="logo-shine"></div>
      <img
        src="/logo.png"
        alt="Logo"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
};

// Blackout Component
export const Blackout: React.FC<{ opacity: number }> = ({ opacity }) => {
  return <div className="blackout" style={{ opacity: opacity }}></div>;
};

// ScrollableContent Component
export const ScrollableContent: React.FC = () => {
  return (
    <div
      className="pointer-events-none bg-transparent text-transparent"
      style={{
        height: "200vh",
      }}
    >
      Scrollable content
    </div>
  );
};

export const HandleLogoClick = () => {
  if (window.scrollY <= 0) {
    window.scrollTo({
      top: window.scrollY + 171,
      behavior: "smooth",
    });
  }
};
