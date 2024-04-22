// Products array containing product data

let Products = [
  {
    title: "Mobile",
    description: "16 GB RAM | 64 MP Camera",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
    price: 48999,
  },
  {
    title: "Mobile",
    description: "12 GB RAM | 64 MP Camera",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
    price: 47999,
  },
  {
    title: "Refrigerator",
    description: "4 Star | Instant ICE",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/y/d/k/-original-imagwnkacu6rgagg.jpeg?q=70",
    price: 80000,
  },
  {
    title: "Laptop",
    description: "32 GB RAM | RTX 3060",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/o/t/-original-imaguyhz7cyftguh.jpeg?q=70",
    price: 90599,
  },
  {
    title: "Television",
    description: "32 inch LED Display",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/8/t/-original-imagzmeygvkvmzah.jpeg?q=70",
    price: 48999,
  },
  {
    title: "Shoes",
    description: "Running support | Memory Foam",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/j/7/-original-imagyrahgtfzwxbg.jpeg?q=70",
    price: 3999,
  },
  {
    title: "Watch",
    description: "Stainless steel build",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/a/8/-original-imagpzjfpydjvh6k.jpeg?q=70",
    price: 8999,
  },
  {
    title: "Air Conditioner",
    description: "5 star , instant cooling",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
    price: 62999,
  },
];

// Get reference to the products container
let products_container = document.getElementById("products_container");

// Get references to DOM elements
let searchBar = document.querySelector("#navbar > input");
let searchBtn = document.getElementById("navbar_search");
let select = document.querySelector("select");
let form = document.querySelector("form");

// Function to display products in the products container
function showData(Products) {
  products_container.innerHTML = null;

  // Iterate over each product and create HTML elements to display them
  Products.forEach((product, index) => {
    let div = document.createElement("div");
    div.className = "product";

    let img = document.createElement("img");
    img.src = product.img;

    let title = document.createElement("p");
    title.innerHTML = `Title : <strong>${product.title}</strong>`;

    let description = document.createElement("p");
    description.innerHTML = `Description : <strong>${product.description}</strong>`;

    let price = document.createElement("p");
    price.innerHTML = `Price : <strong>${product.price}</strong>`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Add event listener to delete button to remove corresponding product
    deleteBtn.addEventListener("click", () => {
      deleteData(index);
    });

    div.append(img, title, description, price, deleteBtn);
    products_container.append(div);
  });
}

// Function to filter products based on search input
function searchData() {
  let newData = Products.filter((el) => {
    return el.title.toLocaleLowerCase() === searchBar.value.toLocaleLowerCase();
  });

  // Display filtered products or "Product Not Found" message
  if (newData.length > 0) {
    showData(newData);
  } else {
    products_container.innerHTML = `<h1>Product Not Found</h1>`;
  }
}

// Function to sort products based on selected option
function sortData(arr, val) {
  if (val === "low_to_high") {
    let newArr = arr.sort((a, b) => a.price - b.price);
    showData(newArr);
  } else if (val === "high_to_low") {
    let newArr = arr.sort((a, b) => b.price - a.price);
    showData(newArr);
  }
}

// Function to delete a product
function deleteData(index) {
  Products.splice(index, 1);
  showData(Products);
}

// Function to handle form submission (adding new product)
function handleSubmit(event) {
  let product = {};
  event.preventDefault();
  let inputArr = [...event.target];

  // Create a new product object from form input values
  product.title = inputArr[0].value;
  product.description = inputArr[1].value;
  product.img = inputArr[2].value;
  product.price = +inputArr[3].value;

  // Add the new product to the Products array and display updated products
  Products.push(product);
  showData(Products);
  console.log(Products);
}

// Event listeners
select.addEventListener("change", function () {
  if (select.value) {
    sortData(Products, select.value);
  }
});

searchBtn.addEventListener("click", searchData);

form.addEventListener("submit", function (event) {
  handleSubmit(event);
});

// Initial display of products
showData(Products);
