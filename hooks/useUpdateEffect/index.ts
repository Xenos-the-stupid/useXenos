import { useEffect, useRef } from "react";

const useUpdateEffect = (callback: () => void, deps: any[]) => {
  const isRendered = useRef(false);

  useEffect(() => {
    if (!isRendered.current) {
      isRendered.current = true;
      return;
    } else return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
