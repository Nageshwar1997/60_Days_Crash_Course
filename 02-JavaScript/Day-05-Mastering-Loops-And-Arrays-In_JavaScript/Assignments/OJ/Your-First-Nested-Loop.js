// Problem Link ---> https://oj.masaischool.com/contest/11660/problem/1

function yourFirstNested(num) {
  // Write code here
  for (let i = 1; i <= num; i++) {
    let bag = "";
    for (let j = 1; j <= num; j++) {
      bag += j + " ";
    }
    console.log(bag);
  }
}

yourFirstNested(4);