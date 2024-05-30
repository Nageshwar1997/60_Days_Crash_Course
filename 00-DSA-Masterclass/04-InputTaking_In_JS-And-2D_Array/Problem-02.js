let arr = [[3, 2, 5]];

arr.push([1, 2, 4]);
let newArr = [2, 3];

arr.push(newArr);

// console.log(arr[1]); // [1, 2, 4]

arr[2].push(5); // [2, 3, 5]
arr[2].push(6); // [2, 3, 5, 6]

console.log(arr); // [[3, 2, 5], [1, 2, 4], [2, 3, 5, 6]]
