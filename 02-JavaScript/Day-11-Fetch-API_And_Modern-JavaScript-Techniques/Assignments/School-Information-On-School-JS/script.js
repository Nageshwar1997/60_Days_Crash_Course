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

// Problem 10: countCalculation
// Function to count the number of teachers and students in math and history departments.
function countCalculation(school) {
  const { departments } = school;
  const { math, history } = departments;

  return {
    mathTeachersCount: math.teachers,
    historyTeachersCount: history.teachers,
    mathStudentsCount: math.students,
    historyStudentCount: history.students,
  };
}

console.log(countCalculation(school));

// Problem 11: findTopStudent
// Function to find the top student in a given course.
function findTopStudent(school, courseName) {
  let topScore = -Infinity;
  let topStudent = {};

  for (let i = 0; i < school.students.length; i++) {
    const student = school.students[i];
    const { name, className, scores } = student;

    if (scores[courseName] > topScore) {
      topScore = scores[courseName];
      topStudent = { name: name, className: className, scores: scores };
    }
  }

  return topStudent;
}

console.log(findTopStudent(school, "math"));
console.log(findTopStudent(school, "science"));
console.log(findTopStudent(school, "history"));
console.log(findTopStudent(school, "english"));

// Problem 12: addNewDept
// Function to add a new department to the school.
function addNewDept(school, newDepartment) {
  return {
    ...school,
    departments: { ...school.departments, ...newDepartment },
  };
}

console.log(addNewDept(school, { dance: { teachers: 2, students: 50 } }));
console.log(addNewDept(school, { music: { teachers: 4, students: 100 } }));

// Problem 13: highestStudentCountDepartment
// Function to find the department with the highest number of students.
function highestStudentCountDepartment(school) {
  const { departments } = school;

  let maxStudents = -Infinity;
  let maxStudentDept = "";

  for (let department in departments) {
    if (departments[department].students > maxStudents) {
      maxStudents = departments[department].students;
      maxStudentDept = department;
    }
  }
  return maxStudentDept;
}

console.log(highestStudentCountDepartment(school));

// Problem 14: Greeting Message
// Function to generate a greeting message in different languages.
function generateGreeting(name, language = "English") {
  let greetings = {
    English: `Hello, ${name}!`,
    Spanish: `Hola, ${name}!`,
    French: `Bonjour, ${name}!`,
  };

  return greetings[language];
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));

// Rendering HTML
let container = document.getElementById("container");

let countCalculationBtn = document.getElementById("countCalculationbtn");
let findTopStudentBtn = document.getElementById("findTopStudentbtn");
let addNewDeptBtn = document.getElementById("addNewDeptbtn");
let highestStudentCountDepartmentBtn = document.getElementById(
  "highestStudentCountDepartmentbtn"
);
let greetingMessageBtn = document.getElementById("greetingMessagebtn");

// Event listener for the countCalculationBtn
countCalculationBtn.addEventListener("click", function () {
  container.innerHTML = "";
  let result = countCalculation(school);

  // Creating card to display the result
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>Problem 10: Count Calculation</h2>
    <div>
      <p>Math Teachers Count : <strong>${result.mathTeachersCount}</strong></p>
      <p>History Teachers Count : <strong>${result.historyTeachersCount}</strong></p>
      <p>Math Students Count : <strong>${result.mathStudentsCount}</strong></p>
      <p>History Students Count : <strong>${result.historyStudentCount}</strong></p>
    </div>
  `;

  container.append(card);
});

// Event listener for the findTopStudentBtn
findTopStudentBtn.addEventListener("click", function () {
  // Function to find the highest scored subject
  function findHighestScoredSubject(result) {
    let maxScore = -Infinity;
    let maxScoreSubject = "";

    for (let subject in result.scores) {
      if (result.scores[subject] > maxScore) {
        maxScore = result.scores[subject];
        maxScoreSubject = subject;
      }
    }
    return `<p>Highest Scored Subject : <strong>${maxScoreSubject}</strong></p>`;
  }

  // Function to display the result
  function showResult(result) {
    let resultCard = document.createElement("div");
    resultCard.className = "resultCard";
    resultCard.innerHTML = null;

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let thead = document.createElement("thead");

    thead.innerHTML = `
    <tr>
      <th>Subject</th>
      <th>Score</th>
    </tr>
    `;

    table.append(thead);
    table.append(tbody);
    resultCard.append(table);

    for (let subject in result.scores) {
      tbody.innerHTML += `
      <tr>
        <td>${subject}</td>
        <td>${result.scores[subject]}</td>
      </tr>`;
    }

    return resultCard;
  }

  container.innerHTML = null;
  let result = findTopStudent(school, "math");

  // Creating card to display the result
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <h2>Problem 11: Find Top Student</h2>
  <div>
    <p>Name : <strong>${result.name}</strong></p>
    <p>Class : <strong>${result.className}</strong></p>
    <div>${findHighestScoredSubject(result)}</div>
  </div>
  `;
  card.append(showResult(result));
  container.append(card);
});

// Event listener for the addNewDeptBtn
addNewDeptBtn.addEventListener("click", function () {
  function addNewDept(school, newDept) {
    let { departments } = school;
    departments = { ...departments, ...newDept };
    return { ...school, departments };
  }

  container.innerHTML = null;
  let result = addNewDept(school, {
    physics: {
      teachers: 5,
      students: 1000,
    },
    chemistry: {
      teachers: 2,
      students: 500,
    },
  });

  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  <h2>Problem 12: Add New Department</h2>
  <div>
  <p>physics Teachers : <strong>${result.departments.physics.teachers}</strong></p>
  <p>physics Students : <strong>${result.departments.physics.students}</strong></p>
  </div>
  <div>
    <p>chemistry Teachers : <strong>${result.departments.chemistry.teachers}</strong></p>
    <p>chemistry Students : <strong>${result.departments.chemistry.students}</strong></p>
  </div>
  `;

  container.append(card);
});

// Event listener for the highestStudentCountDepartmentBtn
highestStudentCountDepartmentBtn.addEventListener("click", function () {
  function highestStudentCountDepartment(result) {
    let maxCount = -Infinity;
    let maxDept = "";

    for (let dept in result.departments) {
      if (result.departments[dept].students > maxCount) {
        maxCount = result.departments[dept].students;
        maxDept = dept;
      }
    }

    return `<p>Highest Student Count Department : <strong>${maxDept}</strong></p>`;
  }

  container.innerHTML = null;

  let result = highestStudentCountDepartment(school);

  let card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>Problem 13: Highest Student Count Department</h2>
    ${result}
    `;

  container.append(card);
});

// Event listener for the greetingMessageBtn
greetingMessageBtn.addEventListener("click", function () {
  function greetingMessage(name, language = "English") {
    let message = "";

    switch (language) {
      case "Spanish":
        message = `Hola, ${name}!`;
        break;

      case "French":
        message = `Bonjour, ${name}!`;
        break;

      default:
        message = `Hello, ${name}!`;
        break;
    }

    return message;
  }

  container.innerHTML = null;

  let result = greetingMessage("John");

  let card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>Problem 14: Greeting Message</h2>
    <p>${result}</p>
    `;

  container.append(card);
});
