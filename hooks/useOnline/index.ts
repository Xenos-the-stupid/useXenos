import { useEffect, useRef, useState } from "react";
import useEventListener from "../useEventListener";

type Options = {
  onOnline?: (e: Event) => void;
  onOffline?: (e: Event) => void;
};

const useOnline = (options?: Options) => {
  const [online, setOnline] = useState(navigator.onLine);
  const onlineCallback = useRef(options?.onOnline ? options.onOnline : null);
  const offlineCallback = useRef(options?.onOffline ? options.onOffline : null);

  useEffect(() => {
    onlineCallback.current = options?.onOnline ? options.onOnline : null;
    offlineCallback.current = options?.onOffline ? options.onOffline : null;
  });

  useEventListener(window, "online", (e) => {
    setOnline(true);
    if (typeof onlineCallback.current === "function") {
      onlineCallback.current(e);
    }
  });
  useEventListener(window, "offline", (e) => {
    setOnline(false);
    if (typeof offlineCallback.current === "function") {
      offlineCallback.current(e);
    }
  });
  return online;
};

export default useOnline;
