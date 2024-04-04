/* Given a list of user data with name and age, create a list of key-value pairs from the input
From the generated data, print the users whose age is more than 30
Sample Input
["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
[32, 30, 26, 28, 44]

Sample Data Stored [] - List {} - Key-Value Pairs
[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]

Sample Output
Nrupul Yogesh */


let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ages = [32, 30, 26, 28, 44];

let users = [];
let user = {};
for (let i = 0; i < names.length; i++) {
  user = { name: names[i], age: ages[i] };
  users.push(user);
}

let output = "";
for (let j = 0; j < users.length; j++) {
    if (users[j].age > 30) {
      output += users[j].name + " ";
  }
}
console.log(output);