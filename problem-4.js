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

// console.log(isPalindrome(9095901));

module.exports = { isPalindrome };
