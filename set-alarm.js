//https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");
