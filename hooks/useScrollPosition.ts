import { useState, useEffect } from "react";

/**
 * Hook to track the current scroll position (vertical).
 * @returns - The current scroll position on the Y-axis.
 */
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  /**
   * Handler for scroll events. Updates the state with the current scroll position.
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScrollPosition;
