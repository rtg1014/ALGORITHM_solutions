// 달팽이는 올라가고 싶다
const fs = require("fs");
let [A,B,V] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split(" ")
    .map((i) => Number(i))
    
    const answer = Math.ceil((V - B) / (A - B))
    console.log(answer)