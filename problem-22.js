function alphaValue(word) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return word.split("").reduce((acc, value) => {
    // if (typeof acc === "string") acc = alphabet.indexOf(acc) + 1;
    return acc + alphabet.indexOf(value) + 1;
  }, 0);
}

function totalScore(names) {
  const arr = names
    .replace(/"/g, "")
    .split(",")
    .sort((a, b) => (a < b ? -1 : 1));
  let total = 0;
  arr.forEach((name, index) => {
    total += alphaValue(name) * (index + 1);
  });
  return total;
}

module.exports = { alphaValue, totalScore };
