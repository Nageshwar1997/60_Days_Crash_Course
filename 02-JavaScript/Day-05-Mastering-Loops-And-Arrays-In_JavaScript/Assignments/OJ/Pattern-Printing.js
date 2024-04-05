// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/4

function patternPrinting(N) {
  // Write code here
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= i; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}

patternPrinting(4);