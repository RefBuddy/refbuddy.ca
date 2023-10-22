import { useEffect, useRef, MutableRefObject } from "react";

const useMouseTilt = (
  showLogo: boolean
): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const img = ref.current.querySelector("img") as HTMLImageElement | null;
    const shine = ref.current.querySelector(
      ".logo-shine"
    ) as HTMLDivElement | null;
    const rect = ref.current.getBoundingClientRect();

    if (!img || !shine) return;

    const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

    const rotateX = -offsetY * 0.4;
    const rotateY = offsetX * 0.4;
    const transformStyle = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Calculate the position of shine based on the cursor position
    const shineX = ((e.clientX - rect.left) / rect.width) * 100;
    const shineY = ((e.clientY - rect.top) / rect.height) * 100;

    // Update the shine's gradient to shine outward from the center
    shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0) 70%)`;

    // Apply the transformation to both the logo and the shine
    img.style.transform = transformStyle;
    shine.style.transform = transformStyle;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    const img = ref.current.querySelector("img") as HTMLImageElement | null;
    const shine = ref.current.querySelector(
      ".logo-shine"
    ) as HTMLDivElement | null;

    if (!img || !shine) return;

    img.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    shine.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;

    // Reset the shine's gradient
    shine.style.background = `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0) 70%)`;
  };

  useEffect(() => {
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
  }, [showLogo]);

  return ref;
};

export default useMouseTilt;
