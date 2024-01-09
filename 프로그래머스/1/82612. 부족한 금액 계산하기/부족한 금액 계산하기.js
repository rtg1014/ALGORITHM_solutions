function solution(price, money, count) {
    let need_money = 0
    while(count>0){
        need_money += (price*count)
        count--
    }    
    // result 가 양수라면 부족한돈이 있는경우, 음수라면 부족한돈이 없는경우
    const result = need_money > money? need_money - money : 0
    return result;
}