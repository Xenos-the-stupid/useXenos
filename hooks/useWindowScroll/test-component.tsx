"use client";
import useWindowScroll from ".";

const TestComponent = () => {
  const { setScrollX, setScrollY } = useWindowScroll({ behavior: "smooth" });

  return (
    <div style={{ width: "500vw", height: "400vh" }}>
      <button onClick={() => setScrollX(300)}>X</button>
      <button onClick={() => setScrollY(300)}>Y</button>
    </div>
  );
};

export default TestComponent;
