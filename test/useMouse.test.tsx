import { renderHook } from "@testing-library/react-hooks";
import useMouse from "../hooks/useMouse";
import { describe, expect, test } from "vitest";

describe("useMouse", () => {
  test("should return initial mouse position", () => {
    const { result } = renderHook(() => useMouse());
    const { x, y } = result.current;
    expect(x).toBe(0);
    expect(y).toBe(0);
  });
});
