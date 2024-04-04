// Problem 2: Use the above function to print the Primes from 2 to a given limit
function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let start = 2;
let end = 20;

for (let i = start; i <= end; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}
