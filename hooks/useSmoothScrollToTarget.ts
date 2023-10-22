import { useState, useEffect, useCallback } from "react";

/**
 * Hook to smoothly scroll to a target position.
 * @param targetScroll - The target scroll position.
 * @returns - An object containing a handler for scroll events and the current scroll position.
 */
const useSmoothScrollToTarget = (targetScroll: number) => {
  const [scrollY, setScrollY] = useState(0);

  /**
   * Linear interpolation function.
   */
  const lerp = useCallback(
    (a: number, b: number, n: number) => (1 - n) * a + n * b,
    []
  );

  /**
   * Function to smoothly scroll to the target position.
   */
  const smoothScrollToTarget = useCallback(() => {
    const currentScroll = window.scrollY;
    const newScroll = lerp(currentScroll, targetScroll, 0.1);

    if (Math.abs(newScroll - currentScroll) < 0.5) {
      window.scrollTo(0, targetScroll);
      return;
    }

    window.scrollTo(0, newScroll);
    requestAnimationFrame(smoothScrollToTarget);
  }, [lerp, targetScroll]);

  /**
   * Handler for scroll events. Initiates smooth scrolling if necessary.
   */
  const handleScroll = useCallback(() => {
    if (window.scrollY > targetScroll) {
      requestAnimationFrame(smoothScrollToTarget);
    } else {
      setScrollY(window.scrollY);
    }
  }, [smoothScrollToTarget, targetScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { handleScroll, scrollY };
};

export default useSmoothScrollToTarget;
