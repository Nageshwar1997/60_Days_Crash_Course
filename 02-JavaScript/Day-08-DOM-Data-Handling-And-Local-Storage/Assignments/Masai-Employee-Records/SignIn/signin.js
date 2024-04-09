let signinForm = document.getElementById("signinForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = this.querySelector("#name").value;
    const role = this.querySelector("#role").value;
    const password = this.querySelector("#password").value;

    users.forEach((user) => {
        if (user.name === name && user.role === role && user.password === password) {
            alert(`Welcome ${user.name} You are successfully logged in and you are redirecting to ${user.role} page..!`);
            if (user.role === "HR") {
                window.location.href = "../Employee/ForHR/hr.html";
                this.reset();
            }
            else if (user.role === "Employee") {
                window.location.href = "../Employee/ForEmployee/employee.html";
                this.reset();
            }
            else {
                alert("Invalid credentials. Please try again.");
            }
        }
    });


})