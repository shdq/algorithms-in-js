const palindrome = require('./problem-4');

/* eslint max-len: 0 */
test('returns true if given number a palindrome', () => {
  expect(palindrome.isPalindrome(123123)).toBe(false);
  expect(palindrome.isPalindrome(123321)).toBe(true);
});
