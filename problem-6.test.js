const problem = require("./problem-6");

/* eslint max-len: 0 */
test(`returns the sum of the squares of the first N natural numbers`, () => {
  expect(problem.sumSquare(10)).toBe(385);
});

/* eslint max-len: 0 */
test(`returns difference between the sum of the squares of the first ten natural numbers and the square of the sum`, () => {
  expect(problem.sqrDiff(10)).toBe(2640);
});
