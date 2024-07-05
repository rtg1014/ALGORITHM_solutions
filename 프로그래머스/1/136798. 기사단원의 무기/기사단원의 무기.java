import java.util.*;
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public int solution(int number, int limit, int power) {
        
        List<Integer> numberList = new ArrayList<>();
        if(number == 1){
            numberList.add(1);
        }else{
            
            numberList.add(1);
            for(int i=2; i<=number; i++){
                List<Integer> divideNums = new ArrayList<>();


                double squareRootNumber = Math.sqrt(i);
                int half = (int)Math.round(squareRootNumber);

            for(int j=1; j<=half; j++){
                if(i%j == 0){
                    divideNums.add(j);
                    divideNums.add(i/j);
                }
            }

            List<Integer> uniqueList = divideNums.stream()
                                                 .distinct()
                                                 .collect(Collectors.toList());

            int length = uniqueList.size();
            numberList.add(length);
            
    }
        }
        
        for(int k=0; k<numberList.size(); k++){
            if (numberList.get(k) > limit) {
                numberList.set(k, power);
            }
        }
        
        int allIronKgSum = 0;
        for(int m : numberList){
            allIronKgSum += m;
        }
        
        
        return allIronKgSum;
    }
}