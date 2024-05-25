function threeMaxThreeMin(N, arr) {
  // Bubble Sort to sort the array in ascending order
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Remove duplicates from the sorted array
  let newArr = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] == arr[i + 1]) {
      continue; // Skip duplicate elements
    } else {
      newArr.push(arr[i]);
    }
  }

  // Get the three smallest unique elements
  let leastArr = newArr.slice(0, 3);
  if (leastArr.length == 3) {
    let result = leastArr.join(" ");
    console.log(result);
  } else {
    console.log("Not Possible");
  }

  // Get the three largest unique elements
  let topArr = newArr.slice(newArr.length - 3, newArr.length);
  if (topArr.length == 3) {
    let result = topArr.join(" ");
    console.log(result);
  } else {
    console.log("Not Possible");
  }
}

// Helper function to compare two values
function compare(a, b) {
  if (a == b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

// Test case
let arr = [3, 5, 0, 9, 8, 3, 5, 0, 9, 8];
let N = 10;

// Call the threeMaxThreeMin function with the test case
threeMaxThreeMin(N, arr);
