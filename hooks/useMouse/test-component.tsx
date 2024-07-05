import React from "react";
import useMouse from ".";

const TestComponent = () => {
  const { x, y } = useMouse();
  return (
    <div>
      {x}: {y}
    </div>
  );
};

export default TestComponent;
