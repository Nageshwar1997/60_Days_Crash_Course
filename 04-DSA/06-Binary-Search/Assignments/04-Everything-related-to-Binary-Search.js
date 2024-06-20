function binarySearch(N, arr, K) {
  let low = 0;
  let high = N - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == K) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < K) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function findOccurrences(N, arr, key) {
  let firstIndex = binarySearch(N, arr, key);

  if (firstIndex == -1) {
    console.log("-1 -1 0");
    return;
  }

  let low = firstIndex;
  let high = N - 1;
  let lastIndex = firstIndex;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == key) {
      lastIndex = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  let count = lastIndex - firstIndex + 1;

  console.log(`${firstIndex} ${lastIndex} ${count}`);
}

findOccurrences(6, [1, 1, 1, 2, 2, 2], 1); // 0 2 3

findOccurrences(6, [1, 1, 1, 2, 2, 2], 3); // -1 -1 0
