var name = "ratna";
var a = 10;
var b = 10;
console.log(name);

const { calculateSum, cacluateMul } = require("./calculateSum");
calculateSum(a, b);
cacluateMul(a, b);

console.log(globalThis);
