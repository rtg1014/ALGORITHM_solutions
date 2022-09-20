const fs = require("fs");

// const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item.trim("\r")); // 숫자로 변환

//console.log(input);

let inputNum = []; // 맨 첫번째 숫자는 실행횟수이기에 빼고 배열을 만드려고 합니다
for (let k = 1; k <= input[0]; k++) {
  inputNum.push(input[k]); // 첫번째 배열 빼고 나머지의 배열 만듬
  //console.log(A[k]);
}

//console.log(inputNum);

solution(inputNum);
//bubbleSort(inputNum);
//insertionSort(inputNum);

function solution(A) {
  let answer = "";
  A = A.sort((a, b) => a - b); // sort로 숫자를 정렬
  let set = new Set(A); // set은 데이터를 중복없이 표현합니다
  //console.log(set);
  //console.log([...set]);
  let arr = [...set]; // [...objetct]를 이용하여 arr을 표현했습니다
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + "\n";
    //console.log(arr[i]); // 한줄 씩 출력
  }
  console.log(answer);
}