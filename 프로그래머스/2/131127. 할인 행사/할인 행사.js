function solution(want, number, discount) {
    const item_list = [...discount]

    let result = 0

    const void_arr = []
    for(let i=0; i<item_list.length; i++){
        if(item_list.slice(i,i+10).length>9){
            const arr_1 = item_list.slice(i,i+10)
            void_arr.push(arr_1)
        }
    }

    const resultObject = {};

    for (let j = 0; j<want.length; j++) {
    const key = want[j];
    const value = number[j];
    resultObject[key] = value;
    }
    
    void_arr.forEach(discount_arr => {
        const is_includes_all = want.every(item => discount_arr.includes(item));
        // console.log('현재 통과한 항목의 종류 => ',discount_arr)
        if (is_includes_all) {
          
            const copy_resultObject ={...resultObject}

            discount_arr.forEach(element => {
                copy_resultObject[element] --
            });

            if(Object.values(copy_resultObject).every(value => value === 0)) result++


        } 
        
    });

    console.log(result)

    return result;
}
