import { useEffect, useRef } from "react";

const useMouseTilt = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const img = ref.current.querySelector('img');
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      let rotateX = 0;
      let rotateY = 0;
      
      if (x > 50 && y < 50) {
        // Top right
        rotateX = 5;
        rotateY = 5;
      } else if (x > 50 && y > 50) {
        // Bottom right
        rotateX = -5;
        rotateY = 5;
      } else if (x < 50 && y > 50) {
        // Bottom left
        rotateX = -5;
        rotateY = -5;
      } else {
        // Top left
        rotateX = 5;
        rotateY = -5;
      }
      
      img.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!ref.current) return;
      const img = ref.current.querySelector('img');
      img.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
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
  }, [ref.current]);

  return ref;
};

export default useMouseTilt;
