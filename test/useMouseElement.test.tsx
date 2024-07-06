import { describe, expect, test } from "vitest";
import useMouseElement from "../hooks/useMouseElement";
import { renderHook } from "@testing-library/react";

describe("useMouseElement", () => {
  test("should return initial mouse position", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useMouseElement(ref));
    const { x, y } = result.current;
    expect(x).toBe(0);
    expect(y).toBe(0);
  });

  test("should return 0 for width and height if the ref is null", () => {
    const ref = { current: null };
    const { result } = renderHook(() => useMouseElement(ref));
    expect(result.current.x).toBe(0);
    expect(result.current.y).toBe(0);
  });
});
