function binarySearch(N, K, arr) {
  let low = 0;
  let high = N - 1;

  let flag = false;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == K) {
      flag = true;
      high = mid - 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (flag) {
    console.log(1);
  } else {
    console.log(-1);
  }
}

binarySearch((N = 5), (K = 0), (arr = [2, -2, 0, 3, 4])); // 1
binarySearch((N = 5), (K = 5), (arr = [2, -2, 0, 3, 4])); // -1
