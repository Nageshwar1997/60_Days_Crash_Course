function checkPalindrome(N, str) {
  //write code here
  str = str.join("");
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i];
  }
  if (bag == str) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

checkPalindrome(3, ["a", "b", "a"]);
checkPalindrome(9, ["n", "a", "g", "e", "s", "h", "w", "a", "r"]);
