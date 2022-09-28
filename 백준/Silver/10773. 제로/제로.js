// 제로
const fs = require("fs");
let [K,...numberArr] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''))
    
    let stack = [];
    for(let i=0; i<numberArr.length; i++){
        let callNumber = numberArr[i]
        if(callNumber>0){
            stack.push(callNumber)
        }else{
            stack.pop()
        }
    }
    const numericConversion = stack.map((i) => Number(i));

    const result = numericConversion.reduce((acc, cur)=>{
    return acc + cur;
    }, 0);

    console.log(result);