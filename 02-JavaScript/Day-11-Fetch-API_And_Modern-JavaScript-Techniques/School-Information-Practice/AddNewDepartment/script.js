const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};


let departments = {...school.departments};

let departmentArr = [];
for(let department in departments){
  departmentArr.push({department: department, ...departments[department]});
}


let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let departmentName = document.querySelector("#departmentName");
  let teacherCount = document.querySelector("#teacherCount");
  let studentCount = document.querySelector("#studentCount");

  let newDepartment = {
    department: departmentName.value,
    teachers: +teacherCount.value,
    students: +studentCount.value
  }

  departmentArr.push(newDepartment);
  // console.log(departmentArr);
  updateTable();
})

// console.log(departmentArr);

let tbody = document.querySelector("tbody");

function updateTable() {
  tbody.innerHTML = null;
  departmentArr.forEach((ele, index) => {
    let tr = document.createElement("tr");
  
    tr.innerHTML = `
    <td>${index+1}</td>
    <td>${ele.department}</td>
    <td>${ele.teachers}</td>
    <td>${ele.students}</td>
    <td><button onClick="deleteRow(${index})">Delete</button></td>
    `;
  
    tbody.append(tr);
  })
}

updateTable();

function deleteRow(index) {
  departmentArr.splice(index, 1);
  updateTable();
}



