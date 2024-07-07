import { useState } from "react";

const useStorage = <T>(name: string, data?: T): [T | undefined, (newData: T) => void] => {
  const [localStorageItem, setLocalStorageItem] = useState<T | undefined>(() => {
    if (data) {
      localStorage.setItem(name, JSON.stringify(data));
      return data;
    } else if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name)!) as T;
    }
    return undefined;
  });

  const setItem = (newData?: T) => {
    if (newData === undefined) {
      localStorage.removeItem(name);
      setLocalStorageItem(undefined);
      return;
    }
    localStorage.setItem(name, JSON.stringify(newData));
    setLocalStorageItem(newData);
  };

  return [localStorageItem, setItem];
};

export default useStorage;
