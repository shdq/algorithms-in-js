function alphaValue(word) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return word.split("").reduce((acc, value) => {
    if (typeof acc === "string") acc = alphabet.indexOf(acc) + 1;
    return acc + alphabet.indexOf(value) + 1;
  });
}

module.exports = { alphaValue };
