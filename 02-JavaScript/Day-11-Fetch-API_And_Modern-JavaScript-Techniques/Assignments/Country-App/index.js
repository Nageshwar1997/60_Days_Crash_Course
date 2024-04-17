let container = document.getElementById("container");
let arr;
let url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

fetchCountries(url);
function fetchCountries(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.data);
      arr = data.data;
      showCountries(arr);
    })
    .catch((err) => {
      console.log(err);
    });
}

function showCountries(arr) {
  container.innerHTML = "";
  arr.forEach((country) => {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("p");
    let rank = document.createElement("p");
    let population = document.createElement("p");

    title.innerHTML = `Country Name : <strong>${country.country}</strong>`;
    rank.innerHTML = `Rank : <strong>${country.Rank}</strong>`;
    population.innerHTML = `Population : <strong>${formatPopulation(
      +country.population
    )}</strong>`;

    card.append(title, rank, population);
    container.append(card);
  });
}


let select = document.getElementById("select");

select.addEventListener("change", (e) => {
  if (e.target.value == "asc") {
    url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${e.target.value}`;
  } else if (e.target.value == "desc") {
    url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${e.target.value}`;
  }
  fetchCountries(url);
})

function formatPopulation(number) {
  let str = number.toString(); // Convert number to string
  let formattedStr = "";
  let counter = -1;
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