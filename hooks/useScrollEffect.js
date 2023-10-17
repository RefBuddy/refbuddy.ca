import { useEffect, useState } from 'react';

const useScrollEffect = () => {
  const [scrollEffect, setScrollEffect] = useState({scale: 1, opacity: 0, translateY: 0});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight; 
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
      // Use the ease-out sine function for a smoother effect
      const easedPercentage = Math.sin((Math.PI / 2) * scrollPercentage) * 1.5;
      
      const scaleFactor = 1 + (easedPercentage * 10); 
      setScrollEffect({scale: scaleFactor, opacity: easedPercentage, translateY: 0});
    };  

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollEffect;
};

export default useScrollEffect;
