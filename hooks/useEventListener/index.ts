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
    if (!target) {
      throw new Error("provide target element by providing ref for useEventListener");
    }
    const element = "current" in target ? target.current : target;
    element.addEventListener(type, internalHandler.current, options);

    return () => {
      element.removeEventListener(type, internalHandler.current);
    };
  }, [target, type, options]);
};

export default useEventListener;
