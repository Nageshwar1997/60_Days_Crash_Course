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

let myData = school.departments;
let showDatabtn = document.getElementById("btn");
let container = document.getElementById("container");

function showData(departments) {
    container.innerHTML = "";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th_SN = document.createElement("th");
  let th_Department = document.createElement("th");
  let th_Teachers = document.createElement("th");
  let th_Students = document.createElement("th");

  th_SN.innerText = "S.N";
  th_Department.innerText = "Department";
  th_Teachers.innerText = "Teachers";
  th_Students.innerText = "Students";

  tr.append(th_SN, th_Department, th_Teachers, th_Students);
  thead.append(tr);
  let tbody = document.createElement("tbody");
  
  let SN = 1;
  for(let department in departments){
    let tr = document.createElement("tr");
    let td_SN = document.createElement("td");
    let td_Department = document.createElement("td");
    let td_Teachers = document.createElement("td");
    let td_Students = document.createElement("td");
    td_SN.innerText = SN++;
    td_Department.innerText = department;
    td_Teachers.innerText = departments[department].students;
    td_Students.innerText = departments[department].students;
    tr.append(td_SN, td_Department, td_Teachers, td_Students);
    tbody.append(tr);
  }

  table.append(thead, tbody);
  container.append(table);
}

showDatabtn.addEventListener("click", () => {
  showData(myData);
});
