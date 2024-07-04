import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handler = () => {
      const { top, left, bottom, height, right, x, y, width } = ref.current?.getBoundingClientRect() || {
        top: 0,
        left: 0,
      };
      // @ts-ignore
      setElementBounding({ bottom, height, left, right, top, width, x, y });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [ref]);
  return { ...elementBounding };
};

export default useElementBounding;
