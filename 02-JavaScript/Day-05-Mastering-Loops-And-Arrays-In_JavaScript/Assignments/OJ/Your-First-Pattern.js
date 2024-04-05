// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/2

function yourFirstPattern(n) {
  // Write code here
  for (let i = 1; i <= n; i++) {
    let bag = "";
    for (let j = 1; j <= n; j++) {
      bag += "* ";
    }
    console.log(bag);
  }
}

yourFirstPattern(4);