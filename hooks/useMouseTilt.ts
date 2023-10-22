import { useEffect, useRef, MutableRefObject } from "react";

/**
 * Hook to add a 3D tilt effect to an element based on mouse movement.
 * @param showLogo - A flag indicating whether to show the logo.
 * @returns - A ref to be attached to the element that should have the tilt effect.
 */
const useMouseTilt = (
  showLogo: boolean
): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Helper function to get the necessary elements and check their existence.
   */
  const getElements = () => {
    if (!ref.current) return null;

    const img = ref.current.querySelector("img") as HTMLImageElement | null;
    const shine = ref.current.querySelector(
      ".logo-shine"
    ) as HTMLDivElement | null;

    if (!img || !shine) return null;

    return { img, shine };
  };

  /**
   * Handler for mouse movement. Calculates and applies the necessary transformations
   * to create a 3D tilt effect based on mouse position.
   */
  const handleMouseMove = (e: MouseEvent) => {
    const elements = getElements();
    if (!elements) return;

    const { img, shine } = elements;
    const rect = ref.current!.getBoundingClientRect();

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

  /**
   * Handler for mouse leave event. Resets the transformations applied during mouse move.
   */
  const handleMouseLeave = () => {
    const elements = getElements();
    if (!elements) return;

    const { img, shine } = elements;

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
