let userContainer = document.getElementById("usersContainer");
let url = "https://reqres.in/api/users";
function fetchUsers() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let users = data.data;
        showData(users);
    }).catch((err)=>{
        console.log(err);
    })
}

function showData(arr) {
    userContainer.innerHTML="";
    arr.forEach((user) => {
        createUser(user);
    })
}

function createUser(user) {
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    let name = document.createElement("p");
    let email = document.createElement("p");

    img.src = user.avatar;
    img.alt = `${user.first_name} ${user.last_name}`;

    name.innerHTML = `<strong>Name : </strong>${user.first_name} ${user.last_name}`;
    email.innerHTML = `<strong>Email : </strong><a href="mailto:${user.email}" id="email">${user.email}</a>`;

    card.append(img, name, email);
    userContainer.append(card)
}