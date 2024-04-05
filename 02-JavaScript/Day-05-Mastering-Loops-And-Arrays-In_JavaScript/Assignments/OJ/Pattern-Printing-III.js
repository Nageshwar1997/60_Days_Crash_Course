// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/9

function patternPrinting3(N) {
  //write code here
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i == 1 || j == N || i == N) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
}


patternPrinting3(5)