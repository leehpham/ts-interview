import { describe, expect, jest, test } from "@jest/globals";

import { timing00 } from "../../../../../src/app/use-cases/impls/Timing00";

describe("timing00", () => {
  test("correct log ordering, passed", () => {
    jest.useFakeTimers();
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    timing00();

    jest.advanceTimersByTime(0);

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "B");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "E");

    jest.advanceTimersByTime(100);

    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, "A");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, "D");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, "C");

    consoleLogSpy.mockRestore();
    jest.useRealTimers();
  });
});
