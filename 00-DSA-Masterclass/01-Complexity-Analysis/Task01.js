// Algorithm : For Calculating area and perimeter of rectangle.

let length = 10;
let width = 20;

console.log(area(length, width));

console.log(perimeter(length, width));

function area(length, width) {
  return length * width;
}

function perimeter(length, width) {
  return 2 * (length + width);
}
