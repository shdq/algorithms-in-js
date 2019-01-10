const factorial = require('./factorial');

/* eslint max-len: 0 */
test('returns factorial of a given number', () => {
  expect(factorial(6))
    .toEqual(720);
});
