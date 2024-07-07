import { useState } from "react";

const useSessionStorage = <T>(name: string, data?: T): [T | undefined, (newData: T) => void] => {
  const [localStorageItem, setLocalStorageItem] = useState<T | undefined>(() => {
    if (data) {
      sessionStorage.setItem(name, JSON.stringify(data));
      return data;
    } else if (sessionStorage.getItem(name)) {
      return JSON.parse(sessionStorage.getItem(name)!) as T;
    }
    return undefined;
  });

  const setItem = (newData?: T) => {
    if (newData === undefined) {
      sessionStorage.removeItem(name);
      setLocalStorageItem(undefined);
      return;
    }
    sessionStorage.setItem(name, JSON.stringify(newData));
    setLocalStorageItem(newData);
  };

  return [localStorageItem, setItem];
};

export default useSessionStorage;
