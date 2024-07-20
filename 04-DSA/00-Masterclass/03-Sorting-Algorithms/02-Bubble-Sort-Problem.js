function solve(N, arr) {
  // Bubble Sort to sort the array in ascending order
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
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
