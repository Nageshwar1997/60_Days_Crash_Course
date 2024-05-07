let body = document.querySelector("body");
const Navbar = () => {
  let div = document.createElement("div");

  let homeBtn = document.createElement("button");
  homeBtn.innerText = "Home";

  let cartBtn = document.createElement("button");
  cartBtn.innerText = "Cart";

  div.append(homeBtn, cartBtn);
  body.append(div);
};

export default Navbar;
