function solution(k, score) {
    const best_k_arr = []
    const result = []
    
    score.forEach(this_score => {
        if(best_k_arr.length<k){
            best_k_arr.push(this_score)
            best_k_arr.sort((a,b)=> b-a)
            result.push(best_k_arr[best_k_arr.length-1])
        }
        else{
            best_k_arr.push(this_score)
            best_k_arr.sort((a,b)=> b-a)

            best_k_arr.pop()
            result.push(best_k_arr[best_k_arr.length-1])

        }
        
    });
    return result;
}