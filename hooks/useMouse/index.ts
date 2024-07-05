import { useEffect, useState } from "react";

const useMouse = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => setCoordinates({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return coordinates;
};

type Coordinates = Readonly<{ x: number; y: number }>;
export default useMouse;
