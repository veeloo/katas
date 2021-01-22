//https://www.codewars.com/kata/539ee3b6757843632d00026b

const capitals = (word) => {
    let index = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            index.push(i);
        }
    }

    return index;
};

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
