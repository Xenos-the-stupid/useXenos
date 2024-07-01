import { useRef, useEffect, useState } from "react";

const useView = <T>(): [boolean, React.MutableRefObject<T | null>] => {
  const ref = useRef<T | null>(null);
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const handler = () => {
      // @ts-ignore
      const rect = ref.current.getBoundingClientRect();

      setInView(
        () =>
          rect.top >= 0 &&
          rect.left >= 0 &&
          //@ts-ignore
          rect.bottom <= (window.innerHeight! || document.documentElement.clientHeight) &&
          //@ts-ignore
          rect.right <= (window.innerWidth! || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return [isInView, ref];
};

export default useView;
