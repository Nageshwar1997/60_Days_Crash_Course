// Algorithm : For Calculating area and perimeter of rectangle.

let length = 10;
let width = 20;
const A = area(length, width);
const P = perimeter(length, width);

console.log(`Area : ${A} | Perimeter : ${P}`);

function area(length, width) {
  return length * width;
}

function perimeter(length, width) {
  return 2 * (length + width);
}
