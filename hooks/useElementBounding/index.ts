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

    window.addEventListener("scroll", updateBounding);

    return () => {
      window.removeEventListener("scroll", updateBounding);
    };
  }, [ref]);

  return { ...elementBounding };
};

export default useElementBounding;
