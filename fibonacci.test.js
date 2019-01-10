const fib = require('./fibonacci');

/* eslint max-len: 0 */
test('returned fibonacci number for a given position', () => {
  expect(fib.fibonacci(12))
    .toEqual(144);
});

test('returned fibonacci number for a given position (recursive implementation)', () => {
  expect(fib.recFibonacci(12))
    .toEqual(144);
});
