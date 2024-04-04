let numbersArray = [2, 3, 7, 8, 10.13, 15, 18, 34, 25];

// Task 01 ---> Mapping to Doubles
let doubleArray = numbersArray.map((el) => el * 2);

console.log(doubleArray); // [4, 6, 14, 16, 20.26, 30, 36, 68, 50];

// Task 02 ---> Filtering Evens
let evenArray = numbersArray.filter((el) => el % 2 == 0);

console.log(evenArray); // [2, 8, 18, 34]


// Task 03 ---> Summation
let sum = numbersArray.reduce((acc, el) => acc + el, 0);
console.log(sum); // 122.13