import useElementBounding from ".";
import React from "react";

const TestComponent = () => {
  const ref = React.useRef(null);
  const { bottom, height, left, right, top, width, x, y } = useElementBounding(ref);
  return (
    <div
      ref={ref}
      data-testid="test-component"
      style={{ width: "100px", height: "100px", position: "relative", left: "100px", top: "100px" }}>
      <div data-testid="width">{width}</div>
      <div data-testid="height">{height}</div>
      <div data-testid="bottom">{bottom}</div>
      <div data-testid="top">{top}</div>
      <div data-testid="left">{left}</div>
      <div data-testid="right">{right}</div>
      <div data-testid="x">{x}</div>
      <div data-testid="y">{y}</div>
    </div>
  );
};

export default TestComponent;
