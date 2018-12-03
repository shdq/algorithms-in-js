const fibonacci = require('./fibonacci');

/* eslint max-len: 0 */
test('returned fibonacci number for a given position', () => {
  expect(fibonacci(12))
      .toEqual(144);
});
