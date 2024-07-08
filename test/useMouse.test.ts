import { renderHook, act } from "@testing-library/react-hooks";
import useMouse from "../hooks/useMouse";
import { describe, expect, test } from "vitest";
import { fireEvent } from "@testing-library/dom";
import { waitFor } from "@testing-library/react";

describe("useMouse", () => {
  test("should return initial mouse position", () => {
    const { result } = renderHook(() => useMouse());
    const { x, y } = result.current;
    expect(x).toBe(0);
    expect(y).toBe(0);
  });

  test("update value when mouse moves", async () => {
    const { result } = renderHook(() => useMouse());

    act(() => {
      fireEvent.mouseMove(window, { clientX: 200, clientY: 200 });
    });

    await waitFor(() => {
      const { x, y } = result.current;
      expect(x).toBe(200);
      expect(y).toBe(200);
    });
  });

  test("mouse should be in the window", async () => {
    const { result } = renderHook(() => useMouse());

    act(() => {
      fireEvent.mouseEnter(window);
    });

    await waitFor(() => {
      const { isHovered } = result.current;
      expect(isHovered).toBe(true);
    });
  });

  test("mouse should not be in the window", async () => {
    const { result } = renderHook(() => useMouse());

    act(() => {
      fireEvent.mouseLeave(window);
    });

    await waitFor(() => {
      const { isHovered } = result.current;
      expect(isHovered).toBe(false);
    });
  });
});
