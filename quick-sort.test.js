const quickSort = require('./quick-sort');

/* eslint max-len: 0 */
test('unsorted array to be sorted', () => {
  expect(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
      .toEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]);
});
