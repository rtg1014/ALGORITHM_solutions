// 스택
const fs = require("fs");
let [N,...commendList] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''));

    // const result = commendList[0].replace(/[^0-9]/g, "")     
    /// 문자열에서 숫자만 추출 ex) push 1  ==> 1

    let stack = [];
    let answer = [];
    for(let i=0; i<N; i++){
        
        const myPush = commendList[i].replace(/[^0-9]/g, "");
        const mySize = stack.length;
        let myEmpty = 0;
        let myTop = stack[stack.length-1];
        // let myPop = stack.pop(); 

        if(commendList[i]== "push"+" "+commendList[i].replace(/[^0-9]/g, "")){
            stack.push(myPush);
        
        }else if(commendList[i]=="pop"){
            let myPop = stack.pop(); 
            if(mySize==""){
                myPop = -1
            };
            answer.push(myPop + ' ');
        
        }else if(commendList[i]=="size"){
            answer.push(mySize + ' ');
        
        }else if(commendList[i]=="empty"){
            if(mySize===0){
                myEmpty = 1
            }
            answer.push(myEmpty + ' ');
        }else if(commendList[i]=="top"){
            let myTop = stack[stack.length-1];
            if(stack==""){
                myTop = -1
            };
            answer.push(myTop + ' ');
        }
    }
   const result = answer.join("\n")
  

console.log(result)



/// 초기 코드

/*

let stack = []
    
    // const myPush = stack.push(numberExtraction)
    
    // let aaa = "push"+" "+numberExtraction
    // console.log(aaa)
    
    for(let i=0; i<N; i++){
        
        
        const mySize = stack.length;
 

        let myPop = stack.pop(); 
        if(mySize==""){
            myPop = -1
        }
        
        let myEmpty = 0;
        if(mySize==0){
            myEmpty = 1
        }
        
        let myTop = stack[stack.length-1];
        if(stack==""){
            myTop = -1
        };
        
        let myPush = stack.push(commendList[i].replace(/[^0-9]/g, ""))
        
        if(commendList[i]== "push"+" "+commendList[i].replace(/[^0-9]/g, "") || "pop" || "size" || "empty" || "top" ){
            "push"+" "+commendList[i].replace(/[^0-9]/g, "") == myPush;
            "pop" == myPop;
            "size" == mySize;
            "empty" == myEmpty;
            "top" == myTop;
        }
        
    }
    
    */

