// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/7

function patternPrintingI(N) {
  // Write code here
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i == 1 || i == N || j == 1) {
        bag += "* ";
      }
    }
    console.log(bag);
  }
}

patternPrintingI(5);