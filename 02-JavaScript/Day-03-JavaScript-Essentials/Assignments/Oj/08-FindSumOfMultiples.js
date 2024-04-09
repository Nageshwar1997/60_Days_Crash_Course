function sumOfMultiples(n, k, y) {
  //write code here
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    if ((n * i) % y == 0) {
      sum += n * i;
    }
  }
  console.log(sum);
}

sumOfMultiples(3, 10, 5);
