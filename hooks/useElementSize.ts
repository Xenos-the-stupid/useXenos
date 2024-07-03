import { LegacyRef, useEffect, useRef, useState } from "react";

const useElementSize = (
  ref: React.RefObject<HTMLElement>
): {
  width: number;
  height: number;
} => {
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { offsetHeight, offsetWidth } = ref.current;
        setSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    if (ref.current) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return size;
};

export default useElementSize;
