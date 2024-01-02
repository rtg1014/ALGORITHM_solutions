function solution(left, right) {
    
    let answer = 0
    
    for(let i=left; i<=right; i++){
        let even_number_check = 0
        let divide_count = 1;

        while(divide_count<=i){
            if(i%divide_count==0){
                even_number_check++
            }
            divide_count++
        }
        if(even_number_check%2==0){
            answer +=i
            console.log('추가된 i값 체크==>',i)
        }else{
            answer -= i
        }
        // console.log('현재 answer 값',answer)

    }
    return answer;
}
