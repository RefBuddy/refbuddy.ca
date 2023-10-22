import { useState, useEffect } from "react";

const useSmoothScrollToTarget = (targetScroll: number) => {
  const [scrollY, setScrollY] = useState(0);

  let rafId: number | null = null;

  const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

  const handleScroll = () => {
    if (window.scrollY > targetScroll && !rafId) {
      rafId = requestAnimationFrame(smoothScrollToTarget);
    } else {
      setScrollY(window.scrollY);
    }
  };

  const smoothScrollToTarget = () => {
    const currentScroll = window.scrollY;
    const newScroll = lerp(currentScroll, targetScroll, 0.1);

    if (Math.abs(newScroll - currentScroll) < 0.5) {
      window.scrollTo(0, targetScroll);
      cancelAnimationFrame(rafId!);
      rafId = null;
      return;
    }

    window.scrollTo(0, newScroll);
    rafId = requestAnimationFrame(smoothScrollToTarget);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { handleScroll, scrollY };
};

export default useSmoothScrollToTarget;
