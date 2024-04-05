// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/5

function patternOfN(N) {
  // Write code here
  let count = 1;
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      bag += count + " ";
      count++;
    }
    console.log(bag);
  }
}

patternOfN(3);