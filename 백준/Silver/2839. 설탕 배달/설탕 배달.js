// 설탕 배달
const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()

    let N = parseInt(input);
    const bigBag = 5;
    const smallBag = 3;
    let needBagNumber = 0;
    
    // console.log(input%bigBag)
    while(true){
        if(N===4){
            needBagNumber = -1
            break
        }
        if(N%bigBag===0){
            needBagNumber += N/bigBag
            break
        }
        if(N%bigBag>0){
            N -= 3
            needBagNumber += 1 
        }
        
        if(N<0){
            break
        }
    }
    console.log(needBagNumber)
    
    
