// 수 찾기
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', '')); /// \r 지운는법
    
    const [N, A, M, B] = input.map(v => v.split(" "));

    const array = new Set(A);

    const result = B.map(v => array.has(v) ? 1 : 0);

    console.log(result.join("\n"));



/*

내가 푼 풀이법 (시간초과)
    
    const n = input[0];     // 5
    const a = input[1].split(" ");     // 41523
    const aEqualNumber = input[3].split(" ");  // 13795
    // console.log(aEqualNumber[1])
    

    for(let i=0; i<n; i++){
        if(a.includes(aEqualNumber[i])){
            console.log(1)
        }else{
            console.log(0)
        }
    }
    
*/