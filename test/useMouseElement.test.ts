import { describe, expect, test } from "vitest";
import useMouseElement from "../hooks/useMouseElement";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import { act } from "react";

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
    expect(() => {
      const size = result.current;
    }).toThrowError("provide target element");
  });

  test("should update values when the mouse moves", () => {
    const ref = { current: document.createElement("div") };
    ref.current.style.width = "200px";
    ref.current.style.height = "200px";
    const { result, waitFor } = renderHook(() => useMouseElement(ref));
    act(() => {
      fireEvent.mouseMove(ref.current, { clientX: 100, clientY: 100 });
    });
    const { x, y } = result.current;
    expect(x).toBe(100);
    expect(y).toBe(100);
    act(() => {
      fireEvent.mouseMove(ref.current, { clientX: 200, clientY: 200 });
    });
    waitFor(() => {
      const { x, y } = result.current;
      expect(x).toBe(200);
      expect(y).toBe(200);
    });
  });

  test("should update values when the mouse moves and size changes", () => {
    const ref = { current: document.createElement("div") };
    ref.current.style.width = "200px";
    ref.current.style.height = "200px";
    const { result, waitFor } = renderHook(() => useMouseElement(ref));
    act(() => {
      fireEvent.mouseMove(ref.current, { clientX: 100, clientY: 100 });
    });
    const { x, y } = result.current;
    expect(x).toBe(100);
    expect(y).toBe(100);
    ref.current.style.width = "500px";
    ref.current.style.height = "500px";
    act(() => {
      fireEvent.mouseMove(ref.current, { clientX: 300, clientY: 300 });
    });
    waitFor(() => {
      const { x, y } = result.current;
      expect(x).toBe(300);
      expect(y).toBe(300);
    });
  });
});
