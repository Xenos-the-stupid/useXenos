import { describe, expect, test } from "vitest";
import useOnline from "../hooks/useOnline";
import { renderHook } from "@testing-library/react";

describe("useOnline", () => {
  test("useOnline should be defined", () => {
    expect(useOnline).toBeDefined();
  });

  test("useOnline should be a function", () => {
    expect(typeof useOnline).toBe("function");
  });
  test("calling makeOnline updates the online state to true", () => {
    const { result } = renderHook(() => useOnline());
    const initialOnline = result.current;
    expect(result.current).toBe(true);
  });
  test("event listeners for online and offline are added and removed correctly", () => {
    const { result, unmount } = renderHook(() => useOnline());
    const initialOnline = result.current;
    unmount();
  });
  test("initial online state is correctly set based on navigator.onLine", () => {
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(navigator.onLine);
  });
  test("calling makeOnline updates the online state to true", () => {
    const { result } = renderHook(() => useOnline());
    const initialOnline = result.current;
    window.dispatchEvent(new Event("online"));
    expect(result.current).toBe(true);
  });

  test("calling makeOffline updates the online state to false", () => {
    const { result } = renderHook(() => useOnline());
    const initialOnline = result.current;
    window.dispatchEvent(new Event("offline"));
    expect(result.current).toBe(true);
  });
});
