// This function initializes the indices and calls the mergeSort function
function sortOut(m, arr) {
  // Create an array of indices [0, 1, 2, ..., m-1]
  let indices = [];
  for (let i = 0; i < m; i++) {
    indices.push(i);
  }

  // Perform merge sort on the array while keeping track of the indices
  mergeSort(arr, indices);

  // Print the sorted indices
  console.log(indices.join(" "));
}

let m = 5;
let arr = [4, 5, 3, 7, 1];

sortOut(m, arr);

// This function performs the merge sort and updates the indices
function mergeSort(arr, indices) {
  // Base case: if the array has 1 or fewer elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array and indices into two halves
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let leftIndices = indices.slice(0, mid);
  let rightIndices = indices.slice(mid);

  // Recursively sort the two halves and merge them back together
  return merge(
    mergeSort(leftArr, leftIndices),
    mergeSort(rightArr, rightIndices),
    leftIndices,
    rightIndices,
    indices
  );
}

// This function merges two sorted arrays while updating the indices array
function merge(leftArr, rightArr, leftIndices, rightIndices, indices) {
  let sortedArr = [];
  let i = 0,
    j = 0,
    k = 0;

  // Merge the two arrays while maintaining the order and updating indices
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      sortedArr.push(leftArr[i]);
      indices[k++] = leftIndices[i++];
    } else {
      sortedArr.push(rightArr[j]);
      indices[k++] = rightIndices[j++];
    }
  }

  // Copy any remaining elements from the left array
  while (i < leftArr.length) {
    sortedArr.push(leftArr[i]);
    indices[k++] = leftIndices[i++];
  }

  // Copy any remaining elements from the right array
  while (j < rightArr.length) {
    sortedArr.push(rightArr[j]);
    indices[k++] = rightIndices[j++];
  }

  // Return the sorted array, though it's mainly the indices that matter
  return sortedArr;
}
