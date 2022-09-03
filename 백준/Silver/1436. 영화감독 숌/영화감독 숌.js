// 영화감독 숌
const fs = require("fs");
const input = +fs
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
.toString()


let num = 666;  
let count = 1;
while (count !== input) {
    num++;
    if (String(num).includes("666")) count++;
}
console.log(num);
