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


function highestStudentDepartment(school) {
    const {departments} = school;

let highestCount = 0;
let dept = "";

for(let department in departments){
    // console.log(department);
    for(let key in departments[department]){
        let currentDept = departments[department]["students"];

        if(currentDept > highestCount){
            highestCount = currentDept;
            dept = department;
        }
    }
}
return ({dept, highestCount})
}

let result = document.getElementById("result");

result.innerHTML = `<p>Highest Student Count Department : <strong>${highestStudentDepartment(school).dept}</strong></p>`