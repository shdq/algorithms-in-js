const palindrome = require('./problem-4');

/* eslint max-len: 0 */
test('returns true if given number a palindrome', () => {
  expect(palindrome.isPalindrome(123123)).toBe(false);
  expect(palindrome.isPalindrome(123321)).toBe(true);
});

test('returns the largest product-palindrome of two 3 digits numbers', () => {
  expect(palindrome.largestPalindrome()).toBe(906609);
});
