function solve(N, arr) {
  // A helper function to compare two values
  function compare(a, b) {
    if (a == b) {
      return 0; // Return 0 if the values are equal
    } else if (a < b) {
      return -1; // Return -1 if a is less than b
    } else {
      return 1; // Return 1 if a is greater than b
    }
  }

  // Implementing Bubble Sort to sort the array
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (compare(arr[j], arr[j + 1]) > 0) {
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
  for (let k = 0; k < N; k++) {
    bag += arr[k] + " ";
  }

  // Print the resulting sorted array as a space-separated string
  console.log(bag);
}

// Test case
let arr = [3, 5, 0, 9, 8];
let N = 5;

// Call the solve function with the test case
solve(N, arr);
