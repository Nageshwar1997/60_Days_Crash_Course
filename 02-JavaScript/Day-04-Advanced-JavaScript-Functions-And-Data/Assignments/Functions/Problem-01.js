// Problem 1: Create a function to check if a number is Prime or Not

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

let num1 = 7;
if (checkPrime(num1)) {
  console.log(`${num1} is a Prime Number`);
}
else {
  console.log(`${num1} is not a Prime Number`);
}
