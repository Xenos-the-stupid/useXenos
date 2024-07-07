import { expect, test, describe } from "vitest";
import useSupported from "../hooks/useSupported";
describe("useSupported", () => {
  test("should be defined", () => {
    expect(useSupported).toBeDefined();
  });

  test("should be a function", () => {
    expect(typeof useSupported).toBe("function");
  });

  test("should return true for navigator.mediaDevices", () => {
    expect(useSupported(() => navigator.mediaDevices)).toBe(navigator.mediaDevices ? true : false);
  });

  test("should return true for navigator.storage", () => {
    expect(useSupported(() => navigator.storage)).toBe(navigator.storage ? true : false);
  });

  test("should return true for navigator.clipboard", () => {
    expect(useSupported(() => navigator.clipboard)).toBe(navigator.clipboard ? true : false);
  });

  test("should return true for navigator.geolocation", () => {
    expect(useSupported(() => navigator.geolocation)).toBe(navigator.geolocation ? true : false);
  });

  test("should return true for navigator.serviceWorker", () => {
    expect(useSupported(() => navigator.serviceWorker)).toBe(navigator.serviceWorker ? true : false);
  });

  test("should return true for navigator.share", () => {
    expect(useSupported(() => navigator.userAgent)).toBe(navigator.userAgent ? true : false);
  });

  test("should return true for navigator.vibrate", () => {
    expect(useSupported(() => navigator.vibrate)).toBe(navigator.vibrate! ? true : false);
  });

  test("should return true for navigator.mediaSession", () => {
    expect(useSupported(() => navigator.mediaSession)).toBe(navigator.mediaSession ? true : false);
  });

  test("should return true for navigator.getBattery", () => {
    //@ts-ignore
    expect(useSupported(() => navigator.getBattery)).toBe(navigator.getBattery ? true : false);
  });

  test("should return true for navigator.requestMediaKeySystemAccess", () => {
    expect(useSupported(() => navigator.requestMediaKeySystemAccess)).toBe(
      navigator.requestMediaKeySystemAccess! ? true : false
    );
  });
});
