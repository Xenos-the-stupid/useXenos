import { useLayoutEffect, useState } from "react";

const useElementBounding = (ref: React.RefObject<HTMLElement>) => {
  const [elementBounding, setElementBounding] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    height: 0,
    right: 0,
    x: 0,
    y: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const updateBounding = () => {
      if (ref.current) {
        const { top, left, bottom, height, right, x, y, width } = ref.current.getBoundingClientRect();
        setElementBounding({ top, left, bottom, height, right, x, y, width });
      }
    };
    updateBounding();
    const handleResize = () => window.requestAnimationFrame(updateBounding);
    window.addEventListener("scroll", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return elementBounding || ({} as DOMRect);
};

export default useElementBounding;
