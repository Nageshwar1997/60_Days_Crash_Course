function charAtOddPos(N, str) {
    //write code here
    for (let i = 0; i < N; i++){
        if (i % 2 != 0){
            console.log(str[i]);
        }
    }
}

let N = 9;
let str = "Nageshwar";

charAtOddPos(N, str);
