const fs = require("fs");

const a = 100;

setImmediate(() => console.log(100));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading");
});

setTimeout(() => {
  console.log("set run timer");
}, 0);

process.nextTick(() => console.log("process.nextTick"));

function print() {
  console.log("a=", a);
}

print();

console.log("Last line of the file");
