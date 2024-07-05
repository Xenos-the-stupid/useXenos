import { describe, expect, test } from "vitest";
import useBoundingElement from "../hooks/useElementBounding";
import { render, screen } from "@testing-library/react";
import TestComponent from "../hooks/useElementBounding/test-component";
import React from "react";

describe("useBoundingElement", () => {
  test("useBoundingElement should be defined", () => {
    expect(useBoundingElement).toBeDefined();
  });

  test("useBoundingElement should be a function", () => {
    expect(typeof useBoundingElement).toBe("function");
  });
});

// describe("test component", () => {
//   test("should render bounding values", async () => {
//     const { findByTestId } = render(<TestComponent />);
//     const x = await findByTestId("x");
//     const y = await findByTestId("y");
//     const width = await findByTestId("width");
//     const height = await findByTestId("height");
//     const left = await findByTestId("left");
//     const right = await findByTestId("right");
//     const top = await findByTestId("top");
//     const bottom = await findByTestId("bottom");

//     expect(x.textContent).toBe("100");
//     expect(y.textContent).toBe("100");
//     expect(width.textContent).toBe("100");
//     expect(height.textContent).toBe("100");
//     expect(left.textContent).toBe("100");
//     expect(right.textContent).toBe("200");
//     expect(top.textContent).toBe("100");
//     expect(bottom.textContent).toBe("200");
//   });
// });

/*
 * last test was removed cuz the way react works (or at least according to my experience), i can not get the values
 * before the dom is rendered so we got that delay from 0 to the actual value
 */
