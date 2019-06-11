const { factorial } = require("./factorial");

function serializeFactorials() {
  const array = [1];
  for (let i = 1; i <= 9; i++) {
    array.push(factorial(i));
  }
  return array;
}

module.exports = { serializeFactorials };
