function solution(survey, choices) {
    const result_count = {
        'R':0,
        'C':0,
        'J':0,
        'A':0,
        'T':0,
        'F':0,
        'M':0,
        'N':0
    }
    
    for(let i=0; i<survey.length; i++){
        const battle_char =  survey[i].split('')

        const select_winner = choices[i]
        if(select_winner>4){
            const add_score = choices[i] - 4
            result_count[battle_char[1]] += add_score
        } else if(select_winner<4){
            const add_score = 4 - choices[i]
            result_count[battle_char[0]] += add_score
        }

    }

    // console.log('최종 스코어는? ==> ',result_count)
    const battle_key_pair_arr = [['R','T'],['C','F'],['J','M'],['A','N']]
    
    let last_result = ''
    for(let j=0; j<battle_key_pair_arr.length; j++){
        const pair_1 = battle_key_pair_arr[j][0]
        const pair_2 = battle_key_pair_arr[j][1]

        if((result_count[pair_1]==0 && result_count[pair_2] ==0) || (result_count[pair_1] == result_count[pair_2])){
            last_result += battle_key_pair_arr[j][0]
        }else{
            if( result_count[pair_1]>result_count[pair_2]){
                last_result += pair_1
            }else{
                last_result += pair_2
            }

        }

    }
    // console.log(last_result)
    return last_result;
}