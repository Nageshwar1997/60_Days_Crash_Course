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

let container = document.getElementById("container");

let select = document.getElementById("select");

function topStudent(students, subject) {

  let newArr = students.sort((a, b) => {
    return b.scores[subject]- a.scores[subject];
  });

//   console.log(newArr);
showStudents(newArr);
}
select.addEventListener("change", (e) => {
    
    topStudent(school.students, e.target.value);

})


function showStudents(students) {
    container.innerHTML = '';
    // console.log(students);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let tr = document.createElement("tr");

    let th_SN = document.createElement("th");
    th_SN.innerText = "S.N";

    let th_Name = document.createElement("th");
    th_Name.innerText = "Name";

    let th_Class = document.createElement("th");
    th_Class.innerText = "Class";

    let th_Score_Math = document.createElement("th");
    th_Score_Math.innerText = "Math";

    let th_Score_Science = document.createElement("th");
    th_Score_Science.innerText = "Science";

    let th_Score_History = document.createElement("th");
    th_Score_History.innerText = "History";

    let th_Score_English = document.createElement("th");
    th_Score_English.innerText = "English";

    thead.append(th_SN, th_Name, th_Class, th_Score_Math, th_Score_Science, th_Score_History, th_Score_English);

    students.forEach((student, index) => {
        let tr = document.createElement("tr");

        let td_SN = document.createElement("td");
        let td_Name = document.createElement("td");
        let td_Class = document.createElement("td");
        let td_Score_Math = document.createElement("td");
        let td_Score_Science = document.createElement("td");
        let td_Score_History = document.createElement("td");
        let td_Score_English = document.createElement("td");

        td_SN.innerText = index + 1;
        td_Name.innerText = student.name;
        td_Class.innerText = student.className;
        td_Score_Math.innerText = student.scores.math;
        td_Score_Science.innerText = student.scores.science;
        td_Score_History.innerText = student.scores.history;
        td_Score_English.innerText = student.scores.english;

        tr.append(td_SN, td_Name, td_Class, td_Score_Math, td_Score_Science, td_Score_History, td_Score_English);

        tbody.append(tr);
    })
    table.append(thead, tbody);

    container.append(table);
}



