import { useRef, useEffect, useState } from "react";

const useView = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();

        setInView(
          () =>
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight! || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth! || document.documentElement.clientWidth)
        );
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return isInView;
};

export default useView;
