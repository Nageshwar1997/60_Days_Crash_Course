function sumOfArrPrimes(N1, A, N2, B) {
  //write code here
  let sum = 0;
  for (let i = 0; i < N1; i++) {
    if (checkPrime(A[i])) {
      sum += A[i];
    }
  }
  for (let j = 0; j < N2; j++) {
    if (checkPrime(B[j])) {
      sum += B[j];
    }
  }
  console.log(sum);

  function checkPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

sumOfArrPrimes(5, [1, 2, 3, 4, 5], 5, [6, 7, 8, 9, 10]);
