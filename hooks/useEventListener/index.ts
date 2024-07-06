import { useEffect, useRef } from "react";
//todo: refactor the target type

const useEventListener = (
  target: any,
  type: string,
  handler: (event: Event) => void,
  options?: boolean | AddEventListenerOptions
) => {
  const internalHandler = useRef(handler);

  useEffect(() => {
    console.log("from the hook");
    if (target) {
      target.addEventListener(type, internalHandler.current, options);

      return () => {
        target.removeEventListener(type, internalHandler.current);
      };
    }
  }, [target, type, options]);
};

export default useEventListener;
