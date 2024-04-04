// Problem 5: Write a function to replace spaces in a given string with - .

// input : "The quick brown fox jumps over the lazy dog"

// output : "The-quick-brown-fox-jumps-over-the-lazy-dog"

let string = "The quick brown fox jumps over the lazy dog";

function replaceSpace(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      bag += "-";
    } else {
      bag += str[i];
    }
  }
  return bag;
}

console.log(replaceSpace(string));
