import { describe, expect, jest, test } from "@jest/globals";

import { promise00 } from "../../../../../src/app/use-cases/impls/Promise00";

describe("promise00", () => {
  test("correct log ordering, passed", async () => {
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    await promise00();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 3);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 2);

    consoleLogSpy.mockRestore();
  });
});
