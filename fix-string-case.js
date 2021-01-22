//https://www.codewars.com/kata/5b180e9fedaa564a7000009a
function solve(s) {
    //..

    let uppercase = 0;
    let lowercase = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            uppercase += 1;
        } else lowercase += 1;
    }

    // if (uppercase > lowercase) {
    //     return s.toUpperCase();
    // } else return s.toLowerCase();

    return uppercase > lowercase ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
