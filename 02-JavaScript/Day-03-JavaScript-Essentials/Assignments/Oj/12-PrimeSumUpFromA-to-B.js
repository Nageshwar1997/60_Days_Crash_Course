function sumOfPrimeFromAToB(A, B) {
    //Code Here
    let sum = 0;
    for (let i = A; i <= B; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    console.log(sum);
}

function checkPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

sumOfPrimeFromAToB(1, 5);