import { useEffect, useState } from "react";

/**
 * Custom hook to manage effects in the Hero component.
 * @param handleScroll - Function from useSmoothScrollToTarget hook to manage scrolling.
 * @returns - An object containing showElements and textOpacity state values.
 */
const useHeroEffects = (handleScroll: () => void) => {
  // State to manage the visibility of various elements.
  const [showElements, setShowElements] = useState({
    firstText: false,
    secondText: false,
    logo: false,
    cursorPointer: true,
  });

  // State to manage the opacity of text.
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    // Event handler to manage scrolling and element visibility.
    const handleScrollEvent = () => {
      handleScroll();
      setShowElements((prev) => ({
        ...prev,
        cursorPointer: window.scrollY <= 0,
      }));

      setTextOpacity(window.scrollY > 0 ? 0 : 1);
    };

    // Adding event listener for scroll.
    window.addEventListener("scroll", handleScrollEvent);

    // Setting timers to gradually show elements.
    const timer1 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, firstText: true })),
      800
    );
    const timer2 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, secondText: true })),
      1800
    );
    const timer3 = setTimeout(
      () => setShowElements((prev) => ({ ...prev, logo: true })),
      3000
    );

    // Cleanup function to remove event listener and clear timers.
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScroll]); // Dependency array to ensure updated handleScroll is used.

  return { showElements, textOpacity };
};

export default useHeroEffects;
