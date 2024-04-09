function identifyPrime(num) {
  // Write code here
  if (checkPrime(num)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
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

identifyPrime(13);