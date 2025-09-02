// Return an object describing the prime factorisation of x.
// Each key is a prime and its value is the exponent of that prime.
function prime_factorise(x) {
    let divisor = 2;
    const factors = {};
    while (x >= 2) {
        if (x % divisor) {
            divisor++;
        } else {
            factors[divisor] = (factors[divisor] + 1) || 1;
            x = x / divisor;
        }
    }
    return factors;
}

