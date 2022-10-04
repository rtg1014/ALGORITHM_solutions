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
        if(a[0]!==b[0]) return a[0]-b[0]
        else return a[1]-b[1]
    })
    const answer = coordinateArr.join("\n").replaceAll(','," ")
    console.log(answer)

/* 
기존에 생각한 풀이과정
   
   let coordinateArr =[]
    
    for(let i=0; i<coordinate.length; i++){
        let a = coordinate[i].split(" ").map((i) => Number(i))
        coordinateArr.push(a)
    }

    coordinate.sort((a,b)=>{
        if(a[0]!==b[0]) return a[0]-b[0]
        else return a[2]-b[2]
    
    })
    console.log(coordinate)
    
    실제 콘솔에 나온 값 : [ '1 1', '1 -1', '2 2', '3 3', '3 4' ]
    
    -1만 아니였다면 사실 이 풀이방식도 가능했겠지만, 
    b[2] 값중 하나가 숫자가 아닌 -  가 나오는 경우의수 때문에
    결국 -를 포함한 값으로 새롭게 묶어줘야 했다.

*/
