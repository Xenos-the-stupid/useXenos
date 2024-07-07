import { RefObject, useEffect, useState } from "react";
import useEventListener from "../useEventListener";

const useMouseElement = (ref: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // @ts-ignore
  useEventListener(ref.current, "mousemove", (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  });

  return { ...mousePosition };
};

export default useMouseElement;
