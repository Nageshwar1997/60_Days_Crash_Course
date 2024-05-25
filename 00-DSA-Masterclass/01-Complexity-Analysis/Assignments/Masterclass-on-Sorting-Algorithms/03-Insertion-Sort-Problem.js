function solve(N, arr) {
  // Implementing Insertion Sort to sort the array in ascending order
  for (let i = 1, j; i < N; i++) {
    let current = arr[i]; // Store the current element to be inserted
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      // Shift elements of the sorted segment that are greater than the current element to the right
      arr[j + 1] = arr[j];
    }
    // Place the current element at its correct position in the sorted segment
    arr[j + 1] = current;
  }

  // Initialize an empty string to accumulate the sorted elements
  let bag = "";

  // Iterate through the sorted array and build the output string
  for (let i = 0; i < N; i++) {
    bag += arr[i] + " ";
  }

  // Print the resulting sorted array as a space-separated string
  console.log(bag);
}

// Test case
let arr = [3, 5, 0, 9, 8];
let N = 5;

// Call the solve function with the test case
solve(N, arr);
