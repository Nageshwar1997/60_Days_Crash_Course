let signupForm = document.getElementById("signupForm");
let users = JSON.parse(localStorage.getItem("users")) || [];

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector("#name").value;
    const role = this.querySelector("#role").value;
    const password = this.querySelector("#password").value;

    const user = { name, role, password };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "../SignIn/signin.html";
    this.reset();
})