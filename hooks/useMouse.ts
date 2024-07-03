import { useEffect, useState } from "react";

const useMouse = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCoordinates({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return { ...coordinates };
};
export default useMouse;
