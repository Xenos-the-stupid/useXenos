import { describe, expect, test } from "vitest";
import useMounted from "../hooks/useMounted";
import { renderHook } from "@testing-library/react-hooks";

describe("useMounted", () => {
  test("should return true when mounted", () => {
    const { result } = renderHook(() => useMounted());
    expect(result.current).toBe(true);
  });

  test.todo("should return false on unmount", () => {
    const { result, unmount } = renderHook(() => useMounted());
    unmount();
    expect(result.current).toBe(false);
  });

  test("should return true on update", () => {
    const { result, rerender } = renderHook(() => useMounted());
    rerender();
    expect(result.current).toBe(true);
  });

  test.todo("should return false on unmount and update", () => {
    const { result, unmount } = renderHook(() => useMounted());
    unmount();
    expect(result.current).toBe(false);
  });
});
