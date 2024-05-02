let obj = {
  firstName: "Nageshwar",
  lastName: "Pawar",
  age: 27,
  address: {
    city: "Nanded",
    state: "Maharashtra",
    country: "India",
  },
  hobbies: ["Coding", "Playing Games", "Traveling"],
  isMarried: false,
};

const {
  firstName,
  lastName,
  age,
  address: { city, country },
  hobbies: [hobby1, hobby2, hobby3],
  ...rest
} = obj;

console.log("First Name: ", firstName); // First Name: Nageshwar
console.log("Last Name: ", lastName); // Last Name: Pawar
console.log("Age: ", age); // Age: 27
console.log("City: ", city); // City: Nanded
console.log("Country: ", country); // Country: India

console.log("Hobby 1: ", hobby1); // Hobby 1: Coding
console.log("Hobby 2: ", hobby2); // Hobby 2: Playing Games
console.log("Hobby 3: ", hobby3); // Hobby 3: Traveling

console.log("Rest: ", rest); // Rest: { isMarried: false }
