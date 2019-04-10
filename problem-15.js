const { factorial } = require("./factorial");

function paths(n) {
  // Number of path combinations counted by central binomial coefficient
  const facN = factorial(n);
  return factorial(n * 2) / (facN * facN);
}

module.exports = paths;
