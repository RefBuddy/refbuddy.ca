import { useEffect, useRef } from "react";

const useMouseTilt = (showLogo) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const img = ref.current.querySelector('img');
      const shine = ref.current.querySelector('.logo-shine');
      const rect = ref.current.getBoundingClientRect();
      
      const offsetX = (((e.clientX - rect.left) / rect.width) - 0.5) * 100;
      const offsetY = (((e.clientY - rect.top) / rect.height) - 0.5) * 100;
      
      const rotateX = -offsetY * 0.2;
      const rotateY = offsetX * 0.2;
      const transformStyle = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const gradientAngle = Math.atan2(e.clientY - (rect.top + rect.height/2), e.clientX - (rect.left + rect.width/2)) * (180 / Math.PI);
      shine.style.background = `linear-gradient(${gradientAngle}deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 70%)`;
      
      // Apply the transformation to both the logo and the shine
      img.style.transform = transformStyle;
      shine.style.transform = transformStyle;
    };
    
    const handleMouseLeave = () => {
      if (!ref.current) return;
      const img = ref.current.querySelector('img');
      const shine = ref.current.querySelector('.logo-shine');
      img.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
      shine.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    };

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }
  
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseMove);
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref.current, showLogo]);

  return ref;
};

export default useMouseTilt;
