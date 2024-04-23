let authContainer = document.querySelector("#auth");

let home = document.querySelector("#home");

let login = document.querySelector("#login");

let signup = document.querySelector("#signup");

let form = document.querySelector("form");

let users;
home.addEventListener("click", () => {
  window.location.href = "home.html";
});

login.addEventListener("click", () => {
  window.location.href = "login.html";
});

signup.addEventListener("click", () => {
  window.location.href = "signup.html";
});

form.addEventListener("submit", (event) => {
  handleFormSubmit(event);
});

function loadData(key) {
  users = JSON.parse(localStorage.getItem(key)) || [];
  console.log(users);
}
function handleFormSubmit(e) {
  e.preventDefault();

  let targetElements = e.target;

  let email = targetElements[0].value;
  let password = targetElements[1].value;

  let userFound = users.filter((user, index) => {
    return user.email === email && user.password === password;
  });

  if (userFound.length > 0) {
    localStorage.setItem(
      "loggedStatus",
      JSON.stringify({
        status: true,
        userName: userFound[0].user,
      })
    );
    alert("Login Successful...!");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials...!");
  }
}
loadData("users");
