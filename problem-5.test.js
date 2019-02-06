const multiple = require("./problem-5");

/* eslint max-len: 0 */
test("returns smallest number that can be divided by each of the numbers from 1 to 10 without any remainder", () => {
  expect(multiple(10)).toBe(2520);
});
