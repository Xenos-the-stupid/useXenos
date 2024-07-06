import React from "react";
import useSessionStorage from ".";

const TestComponent = () => {
  const [localStorageItem, setLocalStorageItem] = useSessionStorage("test", { x: 0, y: 0 });

  return <div>{JSON.stringify(localStorageItem)}</div>;
};

export default TestComponent;
