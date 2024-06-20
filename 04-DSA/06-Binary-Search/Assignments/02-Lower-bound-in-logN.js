function LowerBoundInLogN(N, K, arr) {
  let low = 0;
  let high = N - 1;

  let bag = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == K) {
      bag = mid;
      high = mid - 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(bag);
}

LowerBoundInLogN(5, 3, [1, 2, 3, 3, 5]); // 2
LowerBoundInLogN(5, 4, [1, 2, 3, 3, 5]); // -1
