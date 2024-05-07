import sum from "./export1.js";
import { mult, square } from "./export2.js";

let addition = sum(1, 2); // 1+2=3

let squared = square(addition); // 3**2=9

let multiplication = mult(addition, squared); // 3*9= 27

console.log(multiplication);
