let root = document.getElementById("root");
// let baseUrl = "http://localhost:3000";
let baseUrl = "https://fakestoreapi.com";

fetchData(`${baseUrl}/products`);

async function fetchData(URL) {
  try {
    let resp = await fetch(URL);
    let data = await resp.json();
    // console.log(data);
    showData(data);
  } catch (error) {
    console.log(error);
  }
}

function showData(arr) {
  root.innerHTML = null;
  arr.forEach((product, index) => {
    let card = document.createElement("div");
    card.className = "card";

    //     card.innerHTML = `
    //     <div class="imageDiv">
    //         <img src=${product.image} alt=${product.title} />
    //     </div>
    //     <p>Title: <strong>${product.title}</strong></p>
    //     <p>Category: <strong>${product.category}</strong></p>
    //     <p>Price: <strong>$${product.price}</strong></p>
    //     <p>Ratings: <strong>${product.rating.rate} ⭐</strong></p>
    //     <div class="btnDiv">
    //         <button onClick="addToCart(${index})">Add to Cart</button>
    //         <button onClick="deleteFromCart(${index})">Delete from Cart</button>
    //     </div>
    // `;

    let imageDiv = document.createElement("div");
    imageDiv.className = "imageDiv";
    let image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    imageDiv.appendChild(image);

    let title = document.createElement("p");
    title.innerHTML = `Title: <strong>${product.title}</strong>`;

    let category = document.createElement("p");
    category.innerHTML = `Category: <strong>${product.category}</strong>`;

    let price = document.createElement("p");
    price.innerHTML = `Price: <strong>$${product.price}</strong>`;

    let ratings = document.createElement("p");
    ratings.innerHTML = `Ratings: <strong>${product.rating.rate} ⭐`;

    let btnDiv = document.createElement("div");
    btnDiv.className = "btnDiv";

    let addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";

    addToCartBtn.addEventListener("click", () => {
      addToCart(product);
    });

    let removeFromCartBtn = document.createElement("button");
    removeFromCartBtn.textContent = "Delete from Cart";

    removeFromCartBtn.addEventListener("click", () => {
      deleteFromCart(product);
    });

    btnDiv.append(addToCartBtn, removeFromCartBtn);
    card.append(imageDiv, title, category, price, ratings, btnDiv);
    root.append(card);
  });
}
function addToCart(product) {
  console.log(product.title);
  alert(product.title + " Added to Cart");
}

function deleteFromCart(product) {
  console.log(product.title);
  alert(product.title + " Deleted from Cart");
}
