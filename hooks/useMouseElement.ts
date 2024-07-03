import React, { RefObject, useEffect, useState } from "react";

const useMouseElement = (ref: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    ref.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return { ...mousePosition };
};

export default useMouseElement;
