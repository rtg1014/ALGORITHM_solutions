
function solution(k, tangerine) {
    const tangerine_arr = {}
    
    tangerine.forEach(element => {
        if(tangerine_arr.hasOwnProperty(element)){
            tangerine_arr[element] ++
        }else if(!(tangerine_arr.hasOwnProperty(element))){
            tangerine_arr[element] = 1
        }
    });

    const sortedEntries_arr = Object.entries(tangerine_arr).sort((a, b) => b[1] - a[1]);


    let result_count = 0
    for(let i=0; i<sortedEntries_arr.length; i++){
        const this_orange = sortedEntries_arr[i][1]
        
        
        if(k-this_orange <= 0){
            result_count++
            break
        }else{
            k -= this_orange
            result_count ++
        }

    }
    console.log(result_count)
    return result_count;
}