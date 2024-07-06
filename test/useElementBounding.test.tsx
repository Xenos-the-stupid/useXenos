import { describe, expect, test } from "vitest";
import useBoundingElement from "../hooks/useElementBounding";

describe("useBoundingElement", () => {
  test("useBoundingElement should be defined", () => {
    expect(useBoundingElement).toBeDefined();
  });

  test("useBoundingElement should be a function", () => {
    expect(typeof useBoundingElement).toBe("function");
  });
});
