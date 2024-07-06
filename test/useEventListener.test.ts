import { describe, test, expect, vi } from "vitest";
import useEventListener from "../hooks/useEventListener";
import { fireEvent, renderHook } from "@testing-library/react";
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

  test("should not add event listener when target is not provided", () => {
    const handler = vi.fn();
    renderHook(() => useEventListener(null, "click", handler));

    expect(handler).not.toHaveBeenCalled();
  });
});
