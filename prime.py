def is_prime(n: int) -> bool:
    """Return True if n is a prime number."""
    if not isinstance(n, int) or n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def primes_up_to(limit: int) -> list[int]:
    """Return a list of prime numbers from 2 up to limit."""
    if not isinstance(limit, int) or limit < 2:
        return []

    sieve = [True] * (limit + 1)
    sieve[0:2] = [False, False]

    for number in range(2, int(limit**0.5) + 1):
        if sieve[number]:
            for multiple in range(number * number, limit + 1, number):
                sieve[multiple] = False

    return [i for i, prime in enumerate(sieve) if prime]


if __name__ == '__main__':
    n = 31
    print(f"is_prime({n}) = {is_prime(n)}")
    print(f"primes_up_to(50) = {primes_up_to(50)}")
