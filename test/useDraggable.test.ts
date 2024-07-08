import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import { describe, expect, test } from "vitest";
import useDraggable from "../hooks/useDraggable";
import { waitFor } from "@testing-library/react";
import { act } from "react";

describe("useDraggable", () => {
  test("useDraggable should be defined", () => {
    expect(useDraggable).toBeDefined();
  });

  test("useDraggable should be a function", () => {
    expect(typeof useDraggable).toBe("function");
  });

  test("should return initial x and y values of 100", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    const { x, y } = result.current;
    expect(x).toBe(100);
    expect(y).toBe(100);
  });

  test("should have a position fixed", () => {
    const ref = { current: document.createElement("div") };
    renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    expect(ref.current.style.position).toBe("fixed");
    expect(ref.current.style.left).toBe("100px");
    expect(ref.current.style.top).toBe("100px");
  });

  test("position should be updated", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useDraggable(ref, { x: 100, y: 100 }));

    // Simulate mouse down event
    act(() => {
      fireEvent.mouseDown(ref.current, { clientX: 100, clientY: 100 });
    });

    // Simulate mouse move event
    act(() => {
      fireEvent.mouseMove(document, { clientX: 200, clientY: 200 });
    });

    // Simulate mouse up event
    act(() => {
      fireEvent.mouseUp(document);
    });

    waitFor(() => {
      const { x, y } = result.current;
      expect(x).toBe(200);
      expect(y).toBe(200);
    });
  });
});
