import { useLayoutEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useLayoutEffect(() => {
    const makeOnline = () => {
      setOnline(() => true);
    };

    const makeOffline = () => {
      setOnline(() => false);
    };

    window.addEventListener("offline", makeOffline);
    window.addEventListener("online", makeOnline);

    return () => {
      window.removeEventListener("offline", makeOffline);
      window.removeEventListener("online", makeOnline);
    };
  });
  return online;
};

export default useOnline;
