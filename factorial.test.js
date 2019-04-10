const { factorial, factorialBigInt } = require("./factorial");

/* eslint max-len: 0 */
test("returns factorial of a given number", () => {
  expect(factorial(6)).toEqual(720);
});

/* eslint new-cap: 0 */
test("returns factorial of a given big number", () => {
  expect(factorialBigInt(50)).toEqual(
    BigInt("30414093201713378043612608166064768844377641568960512000000000000")
  );
});
