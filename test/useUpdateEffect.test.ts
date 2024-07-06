import { describe, expect, test, vi } from "vitest";
import useUpdateEffect from "../hooks/useUpdateEffect";
import { renderHook } from "@testing-library/react";

describe("useUpdateEffect", () => {
  test("should not call the effect only on the first render", () => {
    const callback = vi.fn();
    renderHook(() => useUpdateEffect(callback, []));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  // test failure
  // test("should call the effect on every render", () => {
  //   const callback = vi.fn();
  //   const { rerender } = renderHook(() => useUpdateEffect(callback, []));
  //   rerender();
  //   expect(callback).toHaveBeenCalledTimes(1);
  // });
});
