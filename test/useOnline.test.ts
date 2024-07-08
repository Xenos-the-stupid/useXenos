import { describe, expect, test, vi } from "vitest";
import useOnline from "../hooks/useOnline";
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import { act } from "react";

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
    act(() => {
      fireEvent.offline(window);
    });
    expect(result.current).toBe(false);
  });

  test("should run the function callback when online", () => {
    const fn = vi.fn();
    const { waitFor } = renderHook(() => useOnline({ onOnline: fn }));
    act(() => {
      fireEvent.online(window);
    });
    act(() => {
      expect(fn).toBeCalled();
    });
  });

  test("should run the function callback when offline", () => {
    const fn = vi.fn();
    const { waitFor } = renderHook(() => useOnline({ onOffline: fn }));
    act(() => {
      fireEvent.offline(window);
    });
    act(() => {
      expect(fn).toBeCalled();
    });
  });
});
