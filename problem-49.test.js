const { solution } = require("./problem-49");

/* eslint max-len: 0 */
describe("Tests for the problem 49: Prime permutations", () => {
  test("returns 12 digit number concatenated by three 4 digit permutated primes", () => {
    expect(solution().toString().length).toBe(12);
  });
});
