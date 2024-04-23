let authContainer = document.querySelector("#auth");

let home = document.querySelector("#home");

let login = document.querySelector("#login");

let signup = document.querySelector("#signup");

let loggedStatus = JSON.parse(localStorage.getItem("loggedStatus"));

if(loggedStatus){
    login.textContent = `Hi, ${loggedStatus.userName}`
}

home.addEventListener("click", () => {
  window.location.href = "home.html";
});

login.addEventListener("click", () => {
  window.location.href = "login.html";
});

signup.addEventListener("click", () => {
  window.location.href = "signup.html";
});
