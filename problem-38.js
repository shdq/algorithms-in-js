const { isPandigital } = require("./problem-32");

function multiples() {
  for (let i = 9876; i > 1; i--) {
    let result = "";
    for (let j = 1; ; j++) {
      result += (i * j).toString();
      if (result.length === 9) {
        if (isPandigital(result)) return Number(result);
        break;
      }
    }
  }
}
module.exports = { multiples };
