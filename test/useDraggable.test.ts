import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import { describe, expect, test } from "vitest";
import useDraggable from "../hooks/useDraggable";
import { act } from "react";

describe("useDraggable", () => {
  test("should return initial x and y values of 100", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    const { x, y } = result.current;
    expect(x).toBe(100);
    expect(y).toBe(100);
  });

  test("should have a position fixed and the initial values", () => {
    const ref = { current: document.createElement("div") };
    renderHook(() => useDraggable(ref, { x: 100, y: 100 }));
    expect(ref.current.style.position).toBe("fixed");
    expect(ref.current.style.left).toBe("100px");
    expect(ref.current.style.top).toBe("100px");
  });

  test.todo("position should be updated", () => {
    const ref = { current: document.createElement("div") };
    const { result, rerender } = renderHook(() => useDraggable(ref, { x: 100, y: 100 }));

    act(() => {
      fireEvent.mouseDown(document, { clientX: 100, clientY: 100 });
      fireEvent.mouseMove(document, { clientX: 200, clientY: 200 });
      fireEvent.mouseUp(document);
    });
    rerender(() => useDraggable(ref));
    expect(ref.current.style.right).toBe(200);
    expect(ref.current.style.left).toBe(200);
  });
});
