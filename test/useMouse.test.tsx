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

  // test("should update mouse position when mouse moves", () => {
  //   global.document.dispatchEvent(
  //     new MouseEvent("mousemove", {
  //       clientX: 200,
  //       clientY: 200,
  //     })
  //   );
  //   const { result } = renderHook(() => useMouse());
  //   const { x, y } = result.current;
  //   expect(x).toBe(200);
  //   expect(y).toBe(200);
  // });
});

// same as useElementBounding.test
