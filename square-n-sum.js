// https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = (numbers) => {
    let pow = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        pow.push(Math.pow(numbers[i], 2));
    }

    for (let val of pow) {
        sum += val;
    }

    return sum;
};

// test
console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
