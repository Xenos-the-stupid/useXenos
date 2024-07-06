import { renderHook } from "@testing-library/react-hooks";
import useElementSize from "../hooks/useElementSize";
import { describe, expect, test } from "vitest";

describe("useElementSize", () => {
  test("should return an object with width and height properties", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useElementSize(ref));
    expect(result.current).toHaveProperty("width");
    expect(result.current).toHaveProperty("height");
  });

  test("should return 0 for width and height if the ref is null", () => {
    const ref = { current: null };
    const { result } = renderHook(() => useElementSize(ref));
    expect(result.current.width).toBe(0);
    expect(result.current.height).toBe(0);
  });
});
