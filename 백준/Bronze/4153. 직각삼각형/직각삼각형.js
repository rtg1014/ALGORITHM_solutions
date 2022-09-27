// 직각삼각형
const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''))
   
       for(let i=0; i<input.length-1; i++){
        const lineArr = input[i].split(" ").map((e) => e.replaceAll('\r', ''));
        let A = lineArr[0]*lineArr[0];
        let B = lineArr[1]*lineArr[1];
        let C = lineArr[2]*lineArr[2];
        let [a,b,c] = [A,B,C].sort((a,b)=>a-b); 
        if(a===0 || b===0){
            break
        }
        if((a+b)===c){
            console.log("right")
        }else if(c-(a+b)<0 ||c-(a+b)>0 ){
            console.log("wrong")
        }        
    }