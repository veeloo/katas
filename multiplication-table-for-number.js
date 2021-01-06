// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    // good luck
    let table = "";
    for (let i = 0; i < 10; i++) {
        table += `${i + 1} * ${number} = ${(i + 1) * number}\n`;
    }

    return table;
}

console.log(
    multiTable(5),
    "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50"
);
