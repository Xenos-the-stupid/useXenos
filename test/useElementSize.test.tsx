import { renderHook } from "@testing-library/react-hooks";
import useElementSize from "../hooks/useElementSize";
import { describe, expect, test } from "vitest";

describe("useElementSize", () => {
  test("should return an object with width and height properties", () => {
    const ref = { current: document.createElement("div") };
    const { result } = renderHook(() => useElementSize(ref));
    expect(result.current).toHaveProperty("width");
    expect(result.current).toHaveProperty("height");
  });

  test("should return 0 for width and height if the ref is null", () => {
    const ref = { current: null };
    const { result, waitFor } = renderHook(() => useElementSize(ref));
    waitFor(() => {
      expect(() => {
        const size = result.current;
      }).toThrowError("No element found");
    });
  });

  test("should return initial values for the element", () => {
    const ref = { current: document.createElement("div") };
    ref.current.style.width = "100px";
    ref.current.style.height = "100px";
    const { result, waitFor } = renderHook(() => useElementSize(ref));
    const { width, height } = result.current;
    waitFor(() => {
      expect(width).toBe(100);
      expect(height).toBe(100);
    });

    ref.current.style.width = "200px";
    ref.current.style.height = "200px";
    waitFor(() => {
      expect(width).toBe(200);
      expect(height).toBe(200);
    });
  });
});
