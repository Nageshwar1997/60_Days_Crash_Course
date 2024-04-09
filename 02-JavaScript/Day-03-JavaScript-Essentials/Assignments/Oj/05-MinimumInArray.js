function minimumInArray(N, arr) {
  //write code here
  let min = arr[0];
  for (let i = 1; i < N; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}

minimumInArray(5, [1, 2, 3, 4, 5]);