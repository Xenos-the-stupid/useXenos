import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useWindowScroll from "../hooks/useWindowScroll";

describe("useWindowScroll", () => {
  test('should return an object with "setScrollX" and "setScrollY" functions', () => {
    const { result } = renderHook(() => useWindowScroll({ behavior: "smooth" }));
    expect(result.current).toHaveProperty("setScrollX");
    expect(result.current).toHaveProperty("setScrollY");
  });

  test("should set scrollX and scrollY", () => {
    const { result } = renderHook(() => useWindowScroll({ behavior: "smooth" }));
    const { setScrollX, setScrollY } = result.current;
    setScrollX(100);
    setScrollY(100);
    expect(window.scrollX).toBe(100);
    expect(window.scrollY).toBe(100);
  });
});
