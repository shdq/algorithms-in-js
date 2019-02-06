const fib = require("./problem-2");

/* eslint max-len: 0 */
test("returned fibonacci sequence that lower than a given number", () => {
  expect(fib.fibonacci(100))
    .toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
});

test("returned sum of even fibonacci sequence", () => {
  expect(fib.fiboSum(fib.fibonacci(100)))
    .toBe(44);
});
