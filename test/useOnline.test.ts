import { describe, expect, test } from "vitest";
import useOnline from "../hooks/useOnline";
import { fireEvent, renderHook } from "@testing-library/react";

describe("useOnline", () => {
  test("useOnline should be defined", () => {
    expect(useOnline).toBeDefined();
  });

  test("useOnline should be a function", () => {
    expect(typeof useOnline).toBe("function");
  });

  test("should return true when entering website", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(true);
  });

  test("should keep the state when unmount", () => {
    const { result, unmount } = renderHook(() => useOnline());
    unmount();
    expect(result.current).toBe(true);
  });

  test("should keep up with the navigator.online", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(navigator.onLine);
  });

  test("should be true when window gets online", () => {
    const { result } = renderHook(() => useOnline());
    fireEvent.online(window);
    expect(result.current).toBe(true);
  });

  test("should be false when window gets online", () => {
    const { result } = renderHook(() => useOnline());
    fireEvent.offline(window);
    expect(result.current).toBe(false);
  });

  test("should change state depending on the current state of the navigator", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(true);
    fireEvent.offline(window);
    expect(result.current).toBe(false);
  });
});
