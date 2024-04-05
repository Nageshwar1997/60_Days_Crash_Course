// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/8

function patternPrintingII(N) {
  // Write code here
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (j == 1 || j == N || i == N) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
}

patternPrintingII(5);