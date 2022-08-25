const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
  
  const N = Number(input.shift());
  let answer = input.sort((a,b)=>a-b) // 내림차순 정렬
  answer= answer.join('\n') // 줄바꿈 
  console.log(answer)