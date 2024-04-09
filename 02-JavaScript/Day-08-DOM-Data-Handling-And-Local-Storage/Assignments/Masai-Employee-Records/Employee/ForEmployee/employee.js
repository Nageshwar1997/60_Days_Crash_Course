let employeeRecord = JSON.parse(localStorage.getItem("employeeRecord")) || [];

let tbody = document.querySelector("tbody");

if (employeeRecord.length > 0) {
  employeeRecord.forEach((employee) => {
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
      
      deleteBtn.disabled = true;
      td_delete.appendChild(deleteBtn);

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
      }
      else if (employee.experience <= 1) { 
          td_role.innerText = "Fresher";
      }
      else {
          td_role.innerText = "Trainee";
      }

      tr.append(
          td_name,
          td_id,
          td_department,
          td_experience,
          td_email,
          td_mobile,
          td_role,
          td_delete
      )

      tbody.appendChild(tr);
  });
}
