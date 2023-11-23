
function sumDividedBy3Or5(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }

    return sum;
}




//console.log(sumDividedBy3Or5(input));