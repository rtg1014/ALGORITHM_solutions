function solution(s, skip, index) {
    let answer = '';
    const next_num = index 
    
    const skip_arr = skip.split('');
    const target_arr = s.split('')
    const alphbat_list = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    
    let filter_alphbat_list = alphbat_list
    
    skip_arr.forEach((skip_word)=>{
        const delete_word_index = filter_alphbat_list.indexOf(skip_word)
        filter_alphbat_list.splice(delete_word_index, 1);
    })
    
    const double_filter_alphbat_list = filter_alphbat_list.concat(filter_alphbat_list).concat(filter_alphbat_list)

    target_arr.forEach((word) =>{
        const target_word_index = (alphbat_list.indexOf(word)) + next_num
        answer += (double_filter_alphbat_list[target_word_index])
    })
    return answer;
}

