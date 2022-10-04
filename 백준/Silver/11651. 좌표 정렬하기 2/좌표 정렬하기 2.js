// 좌표 정렬하기
const fs = require("fs");
let [N,...coordinate] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''));

    let coordinateArr = coordinate.map((i)=>i.split(" "))     /// -1 때문에 하나로 묶어야함

    coordinateArr = coordinateArr.sort((a,b)=>{
        if(a[1]!==b[1]) return a[1]-b[1]
        else return a[0]-b[0]
    })
    const answer = coordinateArr.join("\n").replaceAll(','," ")
    console.log(answer)