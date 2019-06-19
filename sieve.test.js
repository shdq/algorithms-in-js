const sieve = require("./sieve");

describe("Sieve of Eratosthenes to find prime numbers", () => {
  test("returns primes up to a given limit", () => {
    expect(sieve(30).length).toBe(10);
  });
});
