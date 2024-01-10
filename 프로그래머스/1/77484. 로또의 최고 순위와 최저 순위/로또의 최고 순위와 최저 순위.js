
function solution(lottos, win_nums) {
    const answer = [];
    
    const inclueds_numbers = win_nums.filter(number => lottos.includes(number))
    const zeros = lottos.filter((num)=> num == 0)
    const shot_num_arr = []

    const max_shot_arr = zeros.length + inclueds_numbers.length
    shot_num_arr.push(max_shot_arr)
    
    let min_shot_arr = 0
    if(inclueds_numbers.length==[]){
        min_shot_arr++
    }else{
        min_shot_arr = inclueds_numbers.length
    }

    shot_num_arr.push(min_shot_arr)


    for(let i=0; i<shot_num_arr.length; i++){
        const shot_num = shot_num_arr[i]
        
        switch(true){
            case shot_num == 6:
                answer.push(1)
                break
            case shot_num == 5:
                answer.push(2)
                break
            case shot_num == 4:
                answer.push(3)
                break
            case shot_num == 3:
                answer.push(4)
                break
            case shot_num == 2:
                answer.push(5)
                break
            case shot_num <= 1:
                answer.push(6)
                break
        }
    }
    return answer;
}