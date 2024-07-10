import { describe, expect, test } from "vitest";
import useSessionStorage from "../hooks/useSessionStorage";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";

describe("useSessionStorage", () => {
  test("should return initial data from sessionStorage if available", () => {
    const name = "testKey";
    const data = { test: "testValue" };
    sessionStorage.setItem(name, JSON.stringify(data));

    const { result } = renderHook(() => useSessionStorage(name));

    expect(result.current[0]).toEqual(data);
  });

  test("should set initial data to sessionStorage if provided", () => {
    const name = "testKey";
    const data = { test: "testValue" };

    const { result } = renderHook(() => useSessionStorage(name, data));

    expect(sessionStorage.getItem(name)).toEqual(JSON.stringify(data));
    expect(result.current[0]).toEqual(data);
  });

  test("should update data in sessionStorage", () => {
    const name = "testKey";
    const data = { test: "testValue" };
    const { result } = renderHook(() => useSessionStorage(name, data));
    const newData = { test: "newValue" };
    act(() => result.current[1](newData));

    expect(result.current[0]).toEqual(newData);
    expect(sessionStorage.getItem(name)).toEqual(JSON.stringify(newData));
  });

  test.todo("should remove the item when passing undefined", () => {
    const name = "testKey";
    const data = { test: "testValue" };
    const { result } = renderHook(() => useSessionStorage(name, data));
    //@ts-ignore
    act(() => result.current[1](undefined));
    expect(result.current[0]).not.toBeDefined();
    expect(sessionStorage.getItem(name)).not.toBeDefined();
  });
});
