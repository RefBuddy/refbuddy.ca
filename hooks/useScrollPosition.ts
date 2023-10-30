import { useEffect, useState } from "react";

// Utility function to debounce a function
const debounce = <T extends any[]>(
  func: (...args: T) => void,
  wait: number
) => {
  let timeout: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = debounce(() => {
    setScrollY(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollY;
};

export default useScrollPosition;
