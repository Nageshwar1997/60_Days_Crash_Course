// Get the container element where the user data will be displayed
let userContainer = document.getElementById("usersContainer");

// Define the URL to fetch user data from
let url = "https://reqres.in/api/users";

// Function to fetch user data from the API
function fetchUsers() {
  fetch(url)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      let users = data.data; // Extract the user data array from the response
      showData(users); // Call the function to display the user data
    })
    .catch((err) => {
      console.log(err); // Log any errors that occur during the fetch operation
    });
}

// Function to display user data in the UI
function showData(arr) {
  userContainer.innerHTML = ""; // Clear the previous user data
  arr.forEach((user) => {
    createUser(user); // Create a card for each user in the array
  });
}

// Function to create a card for each user
function createUser(user) {
  let card = document.createElement("div"); // Create a div element for the card
  card.className = "card"; // Set the class name for styling

  // Create an image element for the user's avatar
  let img = document.createElement("img");
  // Set the image source and alt text
  img.src = user.avatar;
  img.alt = `${user.first_name} ${user.last_name}`;

  // Create a paragraph element for the user's name
  let name = document.createElement("p");
  // Set the inner HTML for the name paragraph
  name.innerHTML = `<strong>Name : </strong>${user.first_name} ${user.last_name}`;

  // Create a paragraph element for the user's email
  let email = document.createElement("p");
  // Set the inner HTML for the email paragraph, including a link to email the user
  email.innerHTML = `<strong>Email : </strong><a href="mailto:${user.email}" id="email">${user.email}</a>`;

  // Append the image, name, and email paragraphs to the card element
  card.append(img, name, email);
  // Append the card to the user container
  userContainer.append(card);
}
