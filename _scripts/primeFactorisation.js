function prime_factorise(x) {
	let divisor = 2;

	let factors = {};
	while(x>=2) {

		if(x%divisor){
			divisor++;
		}
		else {
			factors[divisor] = (factors[divisor]+1) || 1;
			x = x/divisor;
		}
	}
	return factors;
}
