function solution(s) {
    const answer = [];
    const arr = [];
    for(let i=0; i<s.length; i++){
        arr.push(s[i])
        if(arr.filter((el)=> el == s[i]).length>1){   // 같은단어 2개 이상이면
            const pop_arr = [...arr]
            const find_target_word = pop_arr.pop()

            let pop_count = 0
            while(true){
                const delet_word = pop_arr.pop()
                pop_count++
                // console.log(pop_count)
                if(delet_word == find_target_word){
                    answer.push(pop_count)
                    break
                }
            }
        }else{
            answer.push(-1)
        }
    }
    return answer;
}