function change(coins = [1, 2, 5, 10, 20, 50, 100, 200], sum = 200) {
  let previousLine = Array(sum + 1).fill(1);

  for (const coin of coins) {
    const currentLine = [1];
    if (coin === 1) continue;
    for (let i = 1; i < sum + 1; i++) {
      if (i < coin) {
        currentLine.push(previousLine[i]);
        continue;
      }
      currentLine.push(previousLine[i] + currentLine[i - coin]);
    }
    previousLine = currentLine;
  }

  return previousLine[previousLine.length - 1];
}

module.exports = { change };
