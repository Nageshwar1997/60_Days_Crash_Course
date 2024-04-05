// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/6

function nestedReversePattern(num) {
  // Write code here
  for (let i = 1; i <= num; i++) {
    let bag = "";
    for (let j = num; j > 0; j--) {
      bag += j + " ";
    }
    console.log(bag);
  }
}

nestedReversePattern(5);