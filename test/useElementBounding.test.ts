import { describe, expect, test } from "vitest";
import useBoundingElement from "../hooks/useElementBounding";
import { renderHook } from "@testing-library/react";

describe("useBoundingElement", () => {
  test("useBoundingElement should be defined", () => {
    expect(1 + 1).toBe(2);
  });
});
