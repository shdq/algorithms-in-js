const triplet = require("./problem-9");

/* eslint max-len: 0 */
test("returns product of Pythagorean triplet where a + b + c = 1000", () => {
  const result = triplet();
  const product = result.reduce((prod, cur) => (prod *= cur));
  expect(product).toBe(1000);
});
