//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
const solution = (str) => {
    return str.split("").reverse().join("");

    // return [...str].reverse().join()
};

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");
