import { expect, test, describe } from "vitest";
import useSupported from "../hooks/useSupported";

describe("useSupported", () => {
  test("should return the value it should", () => {
    expect(useSupported(() => navigator.mediaDevices)).toBe(navigator.mediaDevices ? true : false);
  });

  test("should return the value it should", () => {
    expect(useSupported(() => navigator.storage)).toBe(navigator.storage ? true : false);
  });

  test("should return the value it should", () => {
    expect(useSupported(() => navigator.clipboard)).toBe(navigator.clipboard ? true : false);
  });

  test("should return the value it should", () => {
    expect(useSupported(() => navigator.geolocation)).toBe(navigator.geolocation ? true : false);
  });

  test("should return the value it should", () => {
    expect(useSupported(() => navigator.serviceWorker)).toBe(navigator.serviceWorker ? true : false);
  });

  test("should return the value it should", () => {
    expect(useSupported(() => navigator.userAgent)).toBe(navigator.userAgent ? true : false);
  });
});
