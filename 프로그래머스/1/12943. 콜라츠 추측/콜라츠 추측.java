class Solution {
    public int solution(int num) {
        int count = 0;
        int anwer = 0;
        int limitNumber = -1;
        if(num == 0){
            return 1;
        }else if(num > 1){
            while(num > 0){
                if(num == 1){
                    return count;
                }
                if(count>499){
                    return -1;
                }
                if(num%2 == 0){
                    num = num/2;
                    count++;
                }else {
                    num = (num*3)+1;
                    count++;
                }
            }
            return limitNumber;
        }
        return 0;
    }
}