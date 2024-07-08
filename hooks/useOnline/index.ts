import { useState } from "react";
import useEventListener from "../useEventListener";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener(window, "online", () => setOnline(true));
  useEventListener(window, "offline", () => setOnline(false));
  return online;
};

export default useOnline;
