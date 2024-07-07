import { useLayoutEffect } from "react";

type Options = {
  x?: number;
  y?: number;
};

const useDraggable = (ref: React.RefObject<HTMLElement>, { x = 0, y = 0 }: Options = {}) => {
  let startX: number | null = 0;
  let startY: number | null = 0;

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.position = "fixed";
      ref.current.style.left = x + "px";
      ref.current.style.top = y + "px";
      ref.current.style.cursor = "move";

      const handleMouseDown = (event: MouseEvent) => {
        //@ts-ignore
        startX = event.clientX - ref.current.offsetLeft;
        //@ts-ignore
        startY = event.clientY - ref.current.offsetTop;

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };

      const handleMouseMove = (event: MouseEvent) => {
        if (startX !== null && startY !== null) {
          const newLeft = event.clientX - startX;
          const newTop = event.clientY - startY;
          //@ts-ignore
          ref.current.style.left = newLeft + "px";
          //@ts-ignore
          ref.current.style.top = newTop + "px";
        }
      };

      const handleMouseUp = () => {
        startX = null;
        startY = null;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      ref.current.addEventListener("mousedown", handleMouseDown);

      return () => {
        //@ts-ignore
        ref.current.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [x, y]);

  return { x, y };
};

export default useDraggable;
