function reverseArrayTraversal(n, arr) {
  //write code here
  let bag = "";
  for (let i = n - 1; i >= 0; i--) {
    bag += arr[i] + " ";
  }
  console.log(bag);
}

reverseArrayTraversal(5, [1, 2, 3, 4, 5]);