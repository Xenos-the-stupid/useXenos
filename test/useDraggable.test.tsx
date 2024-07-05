import { describe, expect, test } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import TestComponent from "../hooks/useDraggable/test-component";
import useDraggable from "../hooks/useDraggable";
import React from "react";

describe("useDraggable", () => {
  test("useDraggable should be defined", () => {
    expect(useDraggable).toBeDefined();
  });

  test("useDraggable should be a function", () => {
    expect(typeof useDraggable).toBe("function");
  });
});

describe("TestComponent", () => {
  test("should render with initial x and y values of 100", async () => {
    const { findByTestId } = render(<TestComponent />);

    const xElement = await findByTestId("x");
    const yElement = await findByTestId("y");

    expect(xElement.textContent).toBe("100");
    expect(yElement.textContent).toBe("100");
  });
  test("should have a position absolute", async () => {
    render(<TestComponent />);
    const element = screen.getAllByTestId("test-position");
    expect(element[0].style.position).toBe("fixed");
  });
});
