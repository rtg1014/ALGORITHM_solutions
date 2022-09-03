// 단어 정렬
const fs = require("fs");
    const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
   
    input.shift()

    let result = []
 
    let inputArr = [...new Set(input)]
    
    let sortInput = inputArr.sort((a,b)=>{
        return a.length - b.length
    })
    
    for(let i =1; i<=sortInput[sortInput.length-1].length; i++){
        let temp = sortInput.filter((el)=>el.length === i);
        result.push(...temp.sort());
    }

    for (let word of result) { // 정답 출력
        console.log(word);
      }