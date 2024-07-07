import { describe, expect, test } from "vitest";
import useBoundingElement from "../hooks/useElementBounding";
import { renderHook } from "@testing-library/react";

describe("useBoundingElement", () => {
  test("useBoundingElement should be defined", () => {
    expect(useBoundingElement).toBeDefined();
  });

  test("useBoundingElement should be a function", () => {
    expect(typeof useBoundingElement).toBe("function");
  });
  test("hook should return initial values and 0 when unmount", () => {
    const ref = { current: document.createElement("div") };
    ref.current.style.width = "100px";
    ref.current.style.height = "100px";
    ref.current.style.position = "absolute";
    ref.current.style.left = "0px";
    ref.current.style.top = "0px";
    ref.current.style.right = "0px";
    ref.current.style.bottom = "0px";
    const { result, unmount } = renderHook(() => useBoundingElement(ref));
    const { x, y, bottom, height, left, right, top, width } = result.current;
    expect(x).toBe(0);
    expect(y).toBe(0);
    expect(bottom).toBe(0);
    expect(top).toBe(0);
    expect(height).toBe(0);
    expect(width).toBe(0);
    expect(left).toBe(0);
    expect(right).toBe(0);

    unmount();
    expect(width).toBe(0);
    expect(height).toBe(0);
    expect(top).toBe(0);
    expect(bottom).toBe(0);
    expect(left).toBe(0);
    expect(right).toBe(0);
    expect(x).toBe(0);
    expect(y).toBe(0);
  });
});
