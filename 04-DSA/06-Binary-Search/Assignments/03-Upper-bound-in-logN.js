function UpperBoundInLogN(N, K, arr) {
  let low = 0;
  let high = N - 1;

  let bag = -1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == K) {
      bag = mid;
      low = mid + 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (bag != -1) {
    console.log(bag + 1);
  } else {
    console.log(low);
  }
}

UpperBoundInLogN(5, 199, [101, 200, 1445]); // 1
UpperBoundInLogN(10, 4, [0, 2, 4, 4, 5, 5, 7, 7, 9, 10]); // 4
