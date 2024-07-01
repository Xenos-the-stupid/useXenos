import { useLayoutEffect, useRef } from "react";

const useDraggable = <T extends HTMLElement>({ x = 0, y = 0 }: { x?: number; y?: number }) => {
  const ref = useRef<T>(null);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element) {
      element.style.position = "fixed";
      element.style.left = x + "px";
      element.style.top = y + "px";
      element.style.cursor = "move";

      const handleMouseDown = (event: MouseEvent) => {
        startX.current = event.clientX - element.offsetLeft;
        startY.current = event.clientY - element.offsetTop;

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (startX.current !== null && startY.current !== null) {
          const newLeft = event.clientX - startX.current;
          const newTop = event.clientY - startY.current;
          element.style.left = newLeft + "px";
          element.style.top = newTop + "px";
        }
      };

      const handleMouseUp = () => {
        startX.current = null;
        startY.current = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      element.addEventListener("mousedown", handleMouseDown);

      return () => {
        element.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [x, y]);

  return ref;
};

export default useDraggable;
