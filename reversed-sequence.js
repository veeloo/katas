// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
    let seq = [];

    for (let i = n; i > 0; i--) {
        seq.push(i);
    }

    return seq;
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
