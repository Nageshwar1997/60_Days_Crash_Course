let btn = document.getElementById("btn");

let tbody = document.querySelector("tbody");

function fetchTodos() {
  let url = "https://jsonplaceholder.typicode.com/todos";

  let promise = fetch(url);
  // console.log(promise); // it will return a promise

  promise
    .then((response) => {
      // console.log(response); // it will return a promise
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      showData(data);
    //   btn.disabled = true;
    })
    .catch((err) => {
      console.log(err);
    });
}

function showData(arr) {
  // console.log(arr);
  tbody.innerHTML=null
  arr.forEach((todo) => {
    let tr = document.createElement("tr");
    let td_id = document.createElement("td");
    let td_title = document.createElement("td");
    let td_complete = document.createElement("td");

    td_id.innerText = todo.id;

    td_title.innerText = todo.title;

    let input = document.createElement("input");
    input.type = "checkbox";
    if (todo.completed) {
      input.checked = true;
    }
    td_complete.append(input);

    tr.append(td_id, td_title, td_complete);

    tbody.append(tr);
  });
}
