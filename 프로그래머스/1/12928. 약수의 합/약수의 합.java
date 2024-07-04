import java.util.*;
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public int solution(int n) {
        // 제곱근으로 구하기
        
         if(n == 1){
            return 1;
        }
        
        List<Integer> divideNums = new ArrayList<>();
        double squareRootNumber = Math.sqrt(n);
        int half = (int)Math.round(squareRootNumber);
        
        for(int i=1; i<=half; i++){
            if(n%i == 0){
                divideNums.add(i);
                divideNums.add(n/i);
            }
        }
        
        List<Integer> uniqueList = divideNums.stream()
                                             .distinct()
                                             .collect(Collectors.toList());
        
        int sum = 0;
        for(int i : uniqueList){
            sum += i;
        }
        
        
         System.out.println(sum);
        
        // for(int i : shareNums){
        //     sum += i;
        // }
        return sum;
    }
}