// 블랙잭
const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n");

    const Condition = input[0].split(" ").map((e) => e.replaceAll('\r', ''));   //5,21
    let myCardListArr = input[1].split(" "); /// 5,6,7,8,9
    myCardListArr = myCardListArr.map((i) => Number(i));    /// 배열안의 문자를 숫자형으로 바꿔줌

    const N = Condition[0];     // 5
    const M = Condition[1];     // 21
    let largeNumber = 0;
 
    for(let i=0; i<N; i++){
        for(let j=i+1; j<N; j++){   ///0,1,2
            for(let k=j+1; k<N; k++){
                let sum = myCardListArr[i]+ myCardListArr[j] + myCardListArr[k]
                if(sum>largeNumber && sum<=M){
                    largeNumber = sum;
                }
            }
        }
    }
    
    console.log(largeNumber)