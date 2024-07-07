import { renderHook } from "@testing-library/react-hooks";
import useView from "../hooks/useView";
import { describe, expect, test } from "vitest";

describe("useView", () => {
  test("should return true when the element is within viewport bounds", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useView(ref));
    expect(result.current).toBe(true);
  });

  test("should return false when the element is not within viewport bounds", () => {
    const ref = { current: document.createElement("div") };
    const { result, waitFor } = renderHook(() => useView(ref));
    waitFor(() => {
      expect(result.current).toBe(false);
    });
  });

  test("should return true the the element is visible in the viewport", () => {
    const ref = { current: document.createElement("div") };
    const { result, waitFor } = renderHook(() => useView(ref));
    waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
