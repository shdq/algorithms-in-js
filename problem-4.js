function isPalindrome(n) {
  let number = n;
  let turned = 0;
  while (n > 10) {
    turned += (n % 10);
    turned *= 10;
    n = Math.floor(n / 10);
  }
  turned += n;

  if (number === turned) return true;
  return false;
}

// console.log(isPalindrome(9095901));

module.exports = { isPalindrome };
