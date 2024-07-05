import React from "react";
import useOnline from ".";

const TestComponent = () => {
  const isOnline = useOnline();
  return <div data-testid="connection-status">{isOnline ? "Online" : "Offline"}</div>;
};

export default TestComponent;
