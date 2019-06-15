function isPalindrom(str) {
  return (
    str.toUpperCase() ===
    str
      .split("")
      .reverse()
      .join("")
      .toUpperCase()
  );
}

module.exports = { isPalindrom };
