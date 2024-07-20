function solve(N, names, marks) {
  // Array to store student objects
  let students = [];

  // Create student objects and push them into the students array
  for (let i = 0; i < N; i++) {
    let student = {};
    student.name = names[i];
    student.marks = marks[i];
    students.push(student);
  }

  // Sort students array based on marks and then names if marks are equal
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (
        students[j].marks < students[j + 1].marks ||
        (students[j].marks === students[j + 1].marks &&
          students[j].name > students[j + 1].name)
      ) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }

  // Calculate ranks and create leaderBoard array
  let rank = 1;
  let prevMarks = students[0].marks;
  let leaderBoard = [];
  for (let i = 0; i < N; i++) {
    if (i > 0 && students[i].marks < prevMarks) {
      rank = i + 1;
      prevMarks = students[i].marks;
    }
    leaderBoard.push(rank + " " + students[i].name);
  }

  // Print the leaderBoard
  for (let i = 0; i < leaderBoard.length; i++) {
    console.log(leaderBoard[i]);
  }
}

// Test data
let N = 5;
let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let marks = [32, 30, 26, 28, 44];

// Call the solve function with the test data
solve(N, names, marks);
