const fac = require('./problem-3');

/* eslint max-len: 0 */
test('returns largest prime factor of a given number', () => {
  expect(fac(13195)).toBe(29);
});
