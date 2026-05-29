export function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) return false;
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

export function primesUpTo(limit) {
  if (typeof limit !== 'number' || !Number.isInteger(limit) || limit < 2) return [];

  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let p = 2; p * p <= limit; p++) {
    if (sieve[p]) {
      for (let multiple = p * p; multiple <= limit; multiple += p) {
        sieve[multiple] = false;
      }
    }
  }

  return sieve
    .map((isPossiblePrime, index) => (isPossiblePrime ? index : null))
    .filter((value) => value !== null);
}

export function nextPrimeAfter(n) {
  let candidate = Math.max(2, Math.floor(n) + 1);
  while (!isPrime(candidate)) {
    candidate += 1;
  }
  return candidate;
}
