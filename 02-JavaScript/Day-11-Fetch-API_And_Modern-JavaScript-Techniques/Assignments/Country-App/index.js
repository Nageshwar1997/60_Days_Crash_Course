// Get the container element from the DOM
let container = document.getElementById("container");

// Declare variables
let arr;
let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

// Call the function to fetch countries data
fetchCountries(url);

// Function to fetch countries data from the provided URL
function fetchCountries(url) {
  fetch(url)
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
      // Store data in the 'arr' variable
      arr = data.data;
      // Call the function to display countries
      showCountries(arr);
    })
    .catch((err) => {
      // Log any errors that occur during fetching
      console.log(err);
    });
}

// Function to display countries
function showCountries(arr) {
  // Clear previous content of container
  container.innerHTML = "";
  // Loop through each country in the array
  arr.forEach((country) => {
    // Create a card element for each country
    let card = document.createElement("div");
    card.className = "card";

    // Create paragraphs for country information
    let title = document.createElement("p");
    let rank = document.createElement("p");
    let population = document.createElement("p");

    // Populate paragraphs with country information
    title.innerHTML = `Country Name : <strong>${country.country}</strong>`;
    rank.innerHTML = `Rank : <strong>${country.Rank}</strong>`;
    population.innerHTML = `Population : <strong>${formatPopulation(
      +country.population
    )}</strong>`;

    // Append paragraphs to card element
    card.append(title, rank, population);
    // Append card to container
    container.append(card);
  });
}

// Get the select element from the DOM
let select = document.getElementById("select");

// Event listener for select element
select.addEventListener("change", (e) => {
  // Update URL based on selected option
  if (e.target.value == "asc") {
    url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${e.target.value}`;
  } else if (e.target.value == "desc") {
    url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${e.target.value}`;
  }
  // Fetch countries data with updated URL
  fetchCountries(url);
});

// Function to format population number with commas
function formatPopulation(number) {
  let str = number.toString(); // Convert number to string
  let formattedStr = "";
  let counter = -1;
  // Loop through the digits of the number
  for (let i = str.length - 1; i >= 0; i--) {
    if (counter == 2) {
      formattedStr = "," + formattedStr; // Add comma every three digits
      counter = 0;
    }
    formattedStr = str[i] + formattedStr;
    counter++;
  }
  return formattedStr;
}
