function solution(n) {
    const convert_3 = n.toString(3)
    let answer = 0
    for(let i=0; i<convert_3.length; i++){
        answer += (convert_3[i]) * (3 ** i)
    }
    // console.log('최종 답은 ? ',answer)
    console.log(answer)

    return answer;
}