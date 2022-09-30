// 큐
const fs = require("fs");
let [N,...commendList] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''));

    let que = [];
    let answer = [];
    
    for(let i=0; i<N; i++){
        
        const myPush = commendList[i].replace(/[^0-9]/g, "");
        const mySize = que.length;
        let myEmpty = 0;
        let myBack = que[que.length-1];
        let myFront = que.slice(0,1)
        // let myPop = que.pop(); 



        if(commendList[i]== "push"+" "+commendList[i].replace(/[^0-9]/g, "")){
            que.push(myPush);
        
        }else if(commendList[i]=="pop"){
            let myPop = que.splice(0,1); 
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
        }else if(commendList[i]=="back"){
            let myBack = que[que.length-1];
            if(que==""){
                myBack = -1
            };
            answer.push(myBack + ' ');
        }else if(commendList[i]=="front"){
            if(que==""){
                myFront = -1
            };
            answer.push(myFront + ' ');
        }
    }
   const result = answer.join("\n")
  

console.log(result)