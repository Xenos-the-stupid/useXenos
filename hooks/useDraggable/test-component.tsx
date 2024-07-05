import React from "react";
import useDraggable from ".";

const TestComponent = () => {
  const ref = React.useRef(null);
  const { x, y } = useDraggable(ref, { x: 100, y: 100 });
  return (
    <div
      ref={ref}
      data-testid="test-position">
      <div data-testid="x">{x}</div>
      <div data-testid="y">{y}</div>
    </div>
  );
};

export default TestComponent;
