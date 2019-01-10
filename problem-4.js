function isPalindrome(n) {
  let number = n;
  let reversed = 0;
  while (n > 10) {
    reversed += (n % 10);
    reversed *= 10;
    n = Math.floor(n / 10);
  }
  reversed += n;

  if (number === reversed) return true;
  return false;
}

function largestPalindrome() {
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= i; j--) {
      if (isPalindrome(i * j) && i * j > largest) {
        largest = i * j;
      }
    }
  }
  return largest;
}

module.exports = { isPalindrome, largestPalindrome };
