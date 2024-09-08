import { describe, expect, jest, test } from "@jest/globals";

import { execute } from "../../../../../src/app/use-cases/impls/MultipleStacks";

describe("MultipleStacks", () => {
  test("a()'s stack completes before x()'s, passed.", () => {
    jest.useFakeTimers();
    const fakeFn = jest.fn<() => void>();
    const fakeCb = jest.fn<() => void>();
    const setTimeoutSpy = jest.spyOn(global, "setTimeout");

    execute(fakeFn, fakeCb);

    expect(setTimeoutSpy).toHaveBeenCalled();
    expect(fakeFn).toHaveBeenCalled();
    expect(setTimeoutSpy.mock.invocationCallOrder[0]).toBeLessThan(
      fakeFn.mock.invocationCallOrder[0]
    );
    expect(fakeCb).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(fakeCb).toHaveBeenCalled();
    expect(fakeFn.mock.invocationCallOrder[0]).toBeLessThan(
      fakeCb.mock.invocationCallOrder[0]
    );

    setTimeoutSpy.mockRestore();
    jest.useRealTimers();
  });
});
