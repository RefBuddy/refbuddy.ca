import { useEffect, useState } from 'react';

const useScrollEffect = () => {
  const [scrollEffect, setScrollEffect] = useState({scale: 1, opacity: 0, translateY: 0});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const scaleFactor = 1 + scrollPercentage;
      const translateY = -scrollPosition;
      setScrollEffect({scale: scaleFactor, opacity: scrollPercentage, translateY});
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
