import { describe, expect, test } from "vitest";
import useStorage from "../hooks/useStorage";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";

describe("useStorage", () => {
  test("should return initial data from local storage if available", () => {
    const name = "testKey";
    const data = { test: "testValue" };
    localStorage.setItem(name, JSON.stringify(data));
    const { result } = renderHook(() => useStorage(name));

    expect(result.current[0]).toEqual(data);
  });

  test("should set initial data to local storage if provided", () => {
    const name = "testKey";
    const data = { test: "testValue" };

    const { result } = renderHook(() => useStorage(name, data));

    expect(localStorage.getItem(name)).toEqual(JSON.stringify(data));
    expect(result.current[0]).toEqual(data);
  });

  test("should update data in local storage", () => {
    const name = "testKey";
    const data = { test: "testValue" };

    const { result } = renderHook(() => useStorage(name, data));

    const newData = { test: "newValue" };
    act(() => result.current[1](newData));

    expect(localStorage.getItem(name)).toEqual(JSON.stringify(newData));
    expect(result.current[0]).toEqual(newData);
  });

  test.todo("should remove the item when passing undefined", () => {
    const name = "testKey";
    const data = { test: "testValue" };

    const { result } = renderHook(() => useStorage(name, data));
    //@ts-ignore
    act(() => result.current[1](undefined));
    expect(localStorage.getItem(name)).not.toBeDefined();
    expect(result.current[0]).not.toBeDefined();
  });
});
