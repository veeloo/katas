// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

const sum = (numbers) => {
    "use strict";

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += +numbers[i];
    }
    return total;
};

console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
