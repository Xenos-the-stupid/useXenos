import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import useDraggable from "../hooks/useDraggable";

describe("useDraggable", () => {
  test("useDraggable should be defined", () => {
    expect(useDraggable).toBeDefined();
  });

  test("useDraggable should be a function", () => {
    expect(typeof useDraggable).toBe("function");
  });
});

describe("useDraggable", () => {
  test("useDraggable should be defined", () => {
    expect(typeof useDraggable).toBe("function");
  });

  test("should return initial x and y values of 100", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    const { x, y } = result.current;
    expect(x).toBe(100);
    expect(y).toBe(100);
  });

  test("should have a position absolute", () => {
    const ref = { current: document.createElement("div") };
    renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    expect(ref.current.style.position).toBe("fixed");
    expect(ref.current.style.left).toBe("100px");
    expect(ref.current.style.top).toBe("100px");
  });
});
