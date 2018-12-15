const divisor = require('./common-divisor');

/* eslint max-len: 0 */
test('returns the greatest common divisor of two given numbers', () => {
  expect(divisor(10, 20))
      .toEqual(10);
});
