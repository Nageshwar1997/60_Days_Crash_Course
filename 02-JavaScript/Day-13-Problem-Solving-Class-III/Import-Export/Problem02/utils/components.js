let body = document.querySelector("body");

function Footer() {
  let div = document.createElement("div");

  let footer = document.createElement("footer");

  footer.innerText = "Footer";

  div.append(footer);

  body.append(div);
}

function Sidebar() {
  let div = document.createElement("div");

  let sidebar = document.createElement("div");

  sidebar.innerText = "Sidebar";

  div.append(sidebar);
  body.append(div);
}

export { Footer, Sidebar };
