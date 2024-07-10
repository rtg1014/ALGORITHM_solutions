import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

class Solution {
    public String solution(String s) {
        String[] splitWords = s.split(" ");        
        ArrayList<Integer> convertNumbers = new ArrayList<>();
    
        for(String word : splitWords){
            int num = Integer.parseInt(word);
            convertNumbers.add(num);
        }

        int maxNum = Collections.max(convertNumbers);
        int minNum = Collections.min(convertNumbers);


        String answer = minNum +" "+ maxNum;
        return answer;
    }
}