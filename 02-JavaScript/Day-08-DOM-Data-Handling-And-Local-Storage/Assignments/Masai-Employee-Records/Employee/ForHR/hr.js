let employeeRecord = JSON.parse(localStorage.getItem("employeeRecord")) || [];

let myForm = document.querySelector("form");
let tbody = document.querySelector("tbody");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Create an object to store employee data
  let employee = {
    name: myForm.querySelector("#name").value,
    id: myForm.querySelector("#employeeID").value,
    department: myForm.querySelector("#department").value,
    experience: myForm.querySelector("#exp").value,
    email: myForm.querySelector("#email").value,
    mobile: myForm.querySelector("#mbl").value,
  };

  // Push the employee data to the employeeRecord array
  employeeRecord.push(employee);

  // Save the updated employeeRecord to localStorage
  localStorage.setItem("employeeRecord", JSON.stringify(employeeRecord));

  // Clear the form inputs
  myForm.reset();

  // Update the table with the new employee data
  addEmployee(employee);
});

let addEmployee = (employee) => {
  let tr = document.createElement("tr");

  let td_name = document.createElement("td");
  let td_id = document.createElement("td");
  let td_department = document.createElement("td");
  let td_experience = document.createElement("td");
  let td_email = document.createElement("td");
  let td_mobile = document.createElement("td");
  let td_role = document.createElement("td");
  let td_delete = document.createElement("td");

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    // Remove the employee from employeeRecord
    let index = employeeRecord.indexOf(employee);
    employeeRecord.splice(index, 1);
    // Update localStorage
    localStorage.setItem("employeeRecord", JSON.stringify(employeeRecord));
    // Update the table
    tbody.removeChild(tr);
  });

  td_name.innerText = employee.name;
  td_id.innerText = employee.id;
  td_department.innerText = employee.department;
  td_experience.innerText = employee.experience;
  td_email.innerText = employee.email;
  td_mobile.innerText = employee.mobile;

  if (employee.experience >= 5) {
    td_role.innerText = "Senior";
  } else if (employee.experience >= 2 && employee.experience < 5) {
    td_role.innerText = "Junior";
  } else if (employee.experience <= 1) {
    td_role.innerText = "Fresher";
  } else {
    td_role.innerText = "Trainee";
  }

  td_delete.appendChild(deleteBtn);

  tr.append(
    td_name,
    td_id,
    td_department,
    td_experience,
    td_email,
    td_mobile,
    td_role,
    td_delete
  );

  tbody.appendChild(tr);
};

// Load existing employees from localStorage on page load
if (employeeRecord.length > 0) {
  employeeRecord.forEach((employee) => {
    addEmployee(employee);
  });
}
