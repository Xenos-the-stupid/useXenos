import React from "react";
import useStorage from ".";

const TestComponent = () => {
  const [localStorageItem, setLocalStorageItem] = useStorage("test", { x: 0, y: 0 });

  return <div>{JSON.stringify(localStorageItem)}</div>;
};

export default TestComponent;
