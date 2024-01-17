function solution(my_string) {
    const split_numbers_and_Operator = my_string.split(' ')
    console.log(split_numbers_and_Operator)
    
    let result = parseInt(split_numbers_and_Operator[0]);
    console.log (split_numbers_and_Operator.length)
    
    for(let i=1; i<split_numbers_and_Operator.length; i+=2){
        const operator = split_numbers_and_Operator[i]
        const next_number = parseInt(split_numbers_and_Operator[i+1])
        operator == '+' ? result += next_number : result -= next_number

    }

    
    return result;
}