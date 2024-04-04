// Problem 4: Write a function to check if the char is a small case or not.

function isLowerCase(char) {
  if (char.length == 1 && typeof char == "string") {
    if (char >= "a" && char <= "z") {
      return true;
    }
    return false;
  }
  return false;
}

console.log(isLowerCase("a"));
console.log(isLowerCase("1"));
console.log(isLowerCase("D"));
console.log(isLowerCase("aCbc"));
