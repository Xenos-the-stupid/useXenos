import React, { useState } from "react";
import useUpdateEffect from ".";

const TestComponent = () => {
  const [counter, setCounter] = useState<number>(0);

  useUpdateEffect(() => {
    alert(counter);
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((prevCounter) => (prevCounter || 0) + 1)}>
        {counter !== undefined ? counter : "Loading..."}
      </button>
    </div>
  );
};

export default TestComponent;
