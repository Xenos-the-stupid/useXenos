import React, { LegacyRef } from "react";
import useEventListener from ".";

const TestComponent = () => {
  const ref = React.useRef<HTMLElement>(null);
  useEventListener(ref.current, "click", () => alert("click"));
  return (
    <div>
      <button ref={ref as LegacyRef<HTMLButtonElement> | undefined}>Hello</button>
    </div>
  );
};

export default TestComponent;
