let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  for (let column = 0; column < matrix[row].length; column++) {
    console.log(`Row: ${row} Column: ${column} Value: ${matrix[row][column]}`);
  }
}
/*
Row: 0 Column: 0 Value: 1
Row: 0 Column: 1 Value: 2
Row: 0 Column: 2 Value: 3
Row: 1 Column: 0 Value: 4
Row: 1 Column: 1 Value: 5
Row: 1 Column: 2 Value: 6
Row: 2 Column: 0 Value: 7
Row: 2 Column: 1 Value: 8
Row: 2 Column: 2 Value: 9
*/
