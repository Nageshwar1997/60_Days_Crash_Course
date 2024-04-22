// Define variables for DOM elements
let todoName = document.querySelector("#container > input");
let priority = document.querySelector("#container > select");
let addTodoBtn = document.querySelector("#container > button");
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");

// Initialize empty array to store todos
let todos = [];

// Load todos from localStorage when the script starts
loadData();

// Add event listener to the "Add Todo" button
addTodoBtn.addEventListener("click", handleClick);

// Function to save todos to localStorage
function saveData() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to load todos from localStorage
function loadData() {
  // Retrieve todos from localStorage, or initialize an empty array if none exist
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  // Display todos in the table
  showData(todos);
}

// Event handler for adding a new todo
function handleClick() {
  // Check if input fields are empty
  if (todoName.value === "" || priority.value === "") {
    alert("Please Fill All Fields");
  } else {
    // Create todo object
    let todo = {
      title: todoName.value,
      priority: priority.value,
    };
    // Add todo to array
    todos.push(todo);
    // Save todos to localStorage
    saveData();
    // Display updated todos in the table
    showData(todos);
  }
}

// Function to display todos in the table
function showData(todos) {
  // Clear table body
  tbody.innerHTML = "";

  // Loop through todos and create table rows for each todo
  todos.forEach((todo, index) => {
    let tr = document.createElement("tr");
    let td_SN = document.createElement("td");
    let td_todo = document.createElement("td");
    let td_priority = document.createElement("td");
    let td_delete = document.createElement("td");

    // Create delete button for each todo
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    // Add event listener to delete button
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    // Set text content and style for table cells
    td_SN.innerText = index + 1;
    td_todo.innerText = todo.title;
    td_priority.innerText = todo.priority;
    td_priority.style.color =
      todo.priority === "high"
        ? "green"
        : todo.priority === "medium"
        ? "orange"
        : todo.priority === "low"
        ? "red"
        : "";

    // Append delete button to delete cell, and cells to table row
    td_delete.append(deleteBtn);
    tr.append(td_SN, td_todo, td_priority, td_delete);
    tbody.append(tr);
  });
}

// Function to delete a todo
function deleteTodo(index) {
  // Remove todo from array
  //   todos.splice(index, 1); // OR
  todos = todos.filter((_, i) => index !== i);
  // Save updated todos to localStorage
  saveData();
  // Display updated todos in the table
  showData(todos);
}
