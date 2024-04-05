// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/3

function anotherNested(num) {
  // Write code here
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
  }
}

anotherNested(5);