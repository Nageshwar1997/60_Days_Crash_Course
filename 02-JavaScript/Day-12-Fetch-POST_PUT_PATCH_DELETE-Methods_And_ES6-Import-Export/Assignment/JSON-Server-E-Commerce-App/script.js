let root = document.getElementById("root");
let baseUrl = "http://localhost:3000";

fetchData(`${baseUrl}/products`);

async function fetchData(URL) {
  try {
    let resp = await fetch(URL);
    let data = await resp.json();
    console.log(data);
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

    card.innerHTML = `
    <div class="imageDiv">
        <img src=${product.src} alt=${product.title} />
    </div>
    <p>Title: <strong>${product.title}</strong></p>
    <p>Price: <strong>₹${product.price}</strong></p>
    <p>Ratings: <strong>${product.ratings} ⭐</strong></p>
    <div class="btnDiv">
        <button onClick="addToCart(${index})">Add to Cart</button>
        <button onClick="deleteFromCart(${index})">Delete from Cart</button>
    </div>
`;

    root.append(card);
  });
}
function addToCart(index) {
  console.log(index);
  alert("Added to Cart");
}

function deleteFromCart(index) {
  console.log(index);
  alert("Deleted from Cart");
}
