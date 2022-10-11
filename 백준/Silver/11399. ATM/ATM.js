// ATM
const fs = require("fs");
let [N,...T] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''));

    let time = T.map((e) => e.split(" "));
    let a = time[0]
    let withdrawalTime = a.map((e) => Number(e));
    withdrawalTime = withdrawalTime.sort((a,b)=>a-b)
    
    let sum = 0;
    let answer = 0

    for(let i=0; i<withdrawalTime.length; i++){
        sum += withdrawalTime[i]
        answer += sum
    }

    console.log(answer)
   