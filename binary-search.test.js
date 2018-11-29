const binarySearch = require('./binary-search');

/* eslint max-len: 0 */
test('returned element\'s position in the array with a given value', () => {
  expect(binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 71))
      .toEqual(19);
});

test('returned -1 if value isn\'t found in the array', () => {
  expect(binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 12))
      .toEqual(-1);
});
