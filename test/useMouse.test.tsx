import { renderHook } from "@testing-library/react-hooks";
import useMouse from "../hooks/useMouse";
import { describe, expect, test } from "vitest";
import { fireEvent } from "@testing-library/dom";

describe("useMouse", () => {
  test("should return initial mouse position", () => {
    const { result } = renderHook(() => useMouse());
    const { x, y } = result.current;
    expect(x).toBe(0);
    expect(y).toBe(0);
  });

  test("update value when mouse moves", () => {
    const { result, waitFor } = renderHook(() => useMouse());
    fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });

    waitFor(() => {
      const { x, y } = result.current;
      expect(x).toBe(200);
      expect(y).toBe(200);
    });
  });
});
