import { useEffect, useRef } from "react";

const useMouseTilt = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const img = ref.current.querySelector('img');
      const rect = ref.current.getBoundingClientRect();
      
      // Calculate the distance of the cursor from the center of the logo in percentage
      const offsetX = (((e.clientX - rect.left) / rect.width) - 0.5) * 100;
      const offsetY = (((e.clientY - rect.top) / rect.height) - 0.5) * 100;
      
      // Convert the percentage to rotation angles (max ±5 degrees)
      const rotateX = -offsetY * 0.2; // Negative because moving the mouse up should tilt the logo forward
      const rotateY = offsetX * 0.2;
      
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
