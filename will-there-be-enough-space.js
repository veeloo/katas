// https://www.codewars.com/kata/5875b200d520904a04000003

const enough = (cap, on, wait) => {
    let sisaBangku = cap - (on + wait);

    if (sisaBangku <= 0) {
        return Math.abs(sisaBangku);
    } else {
        return 0;
    }
};

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
