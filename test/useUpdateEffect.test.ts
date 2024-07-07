import { describe, expect, test, vi } from "vitest";
import useUpdateEffect from "../hooks/useUpdateEffect";
import { renderHook } from "@testing-library/react";

describe("useUpdateEffect", () => {
  test("should not call the effect only on the first render", () => {
    const callback = vi.fn();
    renderHook(() => useUpdateEffect(callback, []));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  test("should call the effect on every value change", () => {
    const callback = vi.fn();
    let value = 0;
    const { rerender } = renderHook(() => useUpdateEffect(callback, [value]));
    expect(callback).toHaveBeenCalledTimes(0);
    value++;
    rerender();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should not call the effect if the value is not changed", () => {
    const callback = vi.fn();
    let value = 0;
    const { rerender } = renderHook(() => useUpdateEffect(callback, [value]));
    expect(callback).toHaveBeenCalledTimes(0);
    rerender();
    expect(callback).toHaveBeenCalledTimes(0);
  });
  test("hook should not run twice when the value is not changed", () => {
    const callback = vi.fn();
    let value = 0;
    const { rerender } = renderHook(() => useUpdateEffect(callback, [value]));
    expect(callback).toHaveBeenCalledTimes(0);
    rerender();
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
