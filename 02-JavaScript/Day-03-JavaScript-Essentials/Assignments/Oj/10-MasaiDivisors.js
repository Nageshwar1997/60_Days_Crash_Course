function masaiDivisors(left, right, k) {
    //write code here
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (i % k == 0) {
            count += 1;
        }
    }
    console.log(count);
}

masaiDivisors(1, 10, 3);