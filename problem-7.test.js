const problem = require("./problem-7");

/* eslint max-len: 0 */
test("checks number is prime or not", () => {
  expect(problem.isPrime(1)).toBe(false);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(2)).toBe(true);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(3)).toBe(true);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(4)).toBe(false);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(5)).toBe(true);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(6)).toBe(false);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(11)).toBe(true);
});
test("checks number is prime or not", () => {
  expect(problem.isPrime(13)).toBe(true);
});
