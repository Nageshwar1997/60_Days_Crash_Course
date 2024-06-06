function solve(N, arr, K) {
  // Function to compare elements based on their remainder when divided by K
  function checkAndCompare(a, b) {
    let modA = a % K;
    let modB = b % K;

    if (modA < modB) {
      return -1;
    } else if (modA > modB) {
      return 1;
    } else {
      return 0;
    }
  }

  // Sorting the array based on the custom comparator
  arr.sort((a, b) => {
    let result = checkAndCompare(a, b);

    // If remainders are equal, maintain original relative order (stable sort)
    if (result == 0) {
      return arr.indexOf(a) - arr.indexOf(b);
    }
    return result;
  });

  // Printing the sorted array as a space-separated string
  console.log(arr.join(" "));
}

// Test case
let N = 5;
let arr = [12, 18, 17, 65, 46];
let K = 6;

// Call the solve function with the test case
solve(N, arr, K);
