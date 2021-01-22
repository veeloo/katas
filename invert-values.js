// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.push(Math.abs(array[i]));
        } else {
            newArray.push(-array[i]);
        }
    }
    return newArray;
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);
