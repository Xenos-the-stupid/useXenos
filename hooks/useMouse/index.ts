import { useEffect, useState } from "react";
import useEventListener from "../useEventListener";

const useMouse = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  // @ts-ignore
  useEventListener(window, "pointermove", (event: MouseEvent) =>
    setCoordinates({ x: event.clientX, y: event.clientY })
  );
  return coordinates;
};

type Coordinates = Readonly<{ x: number; y: number }>;
export default useMouse;
