let dataSet1 = {
  name: "Nageshwar",
  age: 27,
};

let dataSet2 = {
  city: "Nanded",
  state: "Maharashtra",
  country: "India",
};

let finalDataSet = { ...dataSet1, ...dataSet2 };

console.log(finalDataSet);
/*
{
  name: 'Nageshwar',
  age: 27,
  city: 'Nanded',
  state: 'Maharashtra',
  country: 'India'
}
 */

let num1 = [1, 2, 3];

let num2 = [4, 5, 6];

let num3 = [...num1, ...num2, 7, 8, 9];

console.log(num3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
