//https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

const areYouPlayingBanjo = (name) =>
    name[0].toLowerCase() === "r"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");
