import { RefObject, useEffect, useState } from "react";

const useMouseElement = (ref: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) {
      throw new Error("Provide target element by providing ref for useMouseElement");
    }
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    ref.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);

  return { ...mousePosition };
};

export default useMouseElement;
