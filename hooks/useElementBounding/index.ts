import { useCallback, useLayoutEffect, useState } from "react";
import useEventListener from "../useEventListener";

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

  const updateBounding = () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(() => {
      setElementBounding({ ...elementBounding, ...ref.current?.getBoundingClientRect() });
    }, [ref, elementBounding]);

  useEventListener(window, "resize", updateBounding);
  useEventListener(window, "scroll", updateBounding);

  return elementBounding || ({} as DOMRect);
};

export default useElementBounding;
