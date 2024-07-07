import { describe, test, expect, vi } from "vitest";
import useEventListener from "../hooks/useEventListener";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import { act } from "react";

describe("useEventListener", () => {
  test("should be defined", () => {
    expect(useEventListener).toBeDefined();
  });
  test("should be a function", () => {
    expect(typeof useEventListener).toBe("function");
  });
  test("should add event listener when target is provided", () => {
    const target = document.createElement("div");
    const handler = vi.fn();
    renderHook(() => useEventListener(target, "click", handler));
    act(() => {
      fireEvent.click(target);
    });
    expect(handler).toHaveBeenCalled();
  });

  test("should throw error when target is not provided", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useEventListener(null, "click", handler));

    expect(() => {
      const res = result.current;
    }).toThrowError("provide target element");
  });

  test("should call the function when the event is triggered", () => {
    const target = { current: document.createElement("div") };
    const handler = vi.fn();
    renderHook(() => useEventListener(target, "click", handler));
    act(() => {
      fireEvent.click(target.current);
    });
    expect(handler).toHaveBeenCalled();
  });

  test("should call the function when the event is triggered", () => {
    const target = { current: document.createElement("div") };
    const handler = vi.fn();
    renderHook(() => useEventListener(target, "click", handler));
    act(() => {
      fireEvent.click(target.current);
    });
    expect(handler).toHaveBeenCalled();
  });
});
