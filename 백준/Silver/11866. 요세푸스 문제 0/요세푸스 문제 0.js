// 요세푸스 문제
const fs = require("fs");
let [allPeople,K] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split(" ")
    const deathNumber = Number(K)

    // [
    //     1, 2, 3, 4,
    //     5, 6, 7
    //   ]
    // [N,K] = 7(사람수),3(죽여야될 번호)    
    // <3, 6, 2, 7, 5, 1, 4>


    let allPeopleArr = []   //1,2,3,4,5,6,7
    for(let i=1; i<=allPeople; i++) allPeopleArr.push(i)

    
    let deathPeopleArr = [];

    for(let j=0; j<allPeople; j++){
        for(let k=1; k<=deathNumber; k++){
            if(k===deathNumber){
                const deathPeople = allPeopleArr.splice(0,1)
                deathPeopleArr.push(deathPeople[0])
            }else{
                const firstNumber = allPeopleArr.splice(0,1)
                allPeopleArr.push(firstNumber[0])
            }
        }
    }

    const result = deathPeopleArr.join(", ")
    console.log(`<`+result+`>`)


    /*
    3번째 수는 배열에 더하고 
    아닐 시 첫번째 수를 맨 뒤로 보낸다
    */