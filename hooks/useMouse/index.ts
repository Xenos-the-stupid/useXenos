import { useState } from "react";
import useEventListener from "../useEventListener";

const useMouse = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // @ts-ignore
  useEventListener(window, "mousemove", (event: MouseEvent) => setCoordinates({ x: event.clientX, y: event.clientY }));
  useEventListener(window, "mouseenter", () => {
    setIsHovered(true);
  });
  useEventListener(window, "mouseleave", () => {
    setIsHovered(false);
  });
  return { ...coordinates, isHovered };
};

type Coordinates = Readonly<{ x: number; y: number }>;
export default useMouse;
