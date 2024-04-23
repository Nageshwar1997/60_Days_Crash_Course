let authContainer = document.querySelector("#auth");

let home = document.querySelector("#home");

let login = document.querySelector("#login");

let signup = document.querySelector("#signup");

let form = document.querySelector("form");

let users = [];

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

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
  let LSData = JSON.parse(localStorage.getItem(key)) || [];
  users = LSData;
  //   console.log(LSData);
}

function name(params) {}
function handleFormSubmit(e) {
  e.preventDefault();
  //   console.log(e);
  let targetElements = e.target;

  let userName = targetElements[0].value;
  let email = targetElements[1].value;
  let password = targetElements[2].value;
  let confirm = targetElements[3].value;

  let filteredUsers = users.filter((user, index) => {
    return user.email == email;
  });

  if (filteredUsers.length > 0) {
    alert("User email id is already present");
  } else {
    if (password == confirm) {
      let user = {
        user: userName,
        email: email,
        password: password,
      };
      users.push(user);
      saveData("users", users);
      // console.log(users);
      alert("Registration Successful");
      window.location.href = "login.html";
    } else {
      alert("Password not matched please check it again...!");
    }
  }
}
loadData("users");
