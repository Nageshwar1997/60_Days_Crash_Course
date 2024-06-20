function searchInSortedAndRotatedArray(n, k, arr) {
  function findPivot(n, arr) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] > arr[high]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  function binarySearch(arr, low, high, target) {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  let pivot = findPivot(n, arr);

  if (pivot == 0) {
    console.log(binarySearch(arr, 0, n - 1, k));
    return;
  }

  if (arr[0] <= k && k <= arr[pivot - 1]) {
    console.log(binarySearch(arr, 0, pivot - 1, k));
    return;
  } else {
    console.log(binarySearch(arr, pivot, n - 1, k));
    return;
  }
}

searchInSortedAndRotatedArray(10, -1, [4, 6, 7, 9, 10, -1, 0, 1, 2, 3]); // 5
searchInSortedAndRotatedArray(6, 6, [3, 4, 7, 9, 1, 2]); // -1
