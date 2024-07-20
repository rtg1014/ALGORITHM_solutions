import java.util.ArrayList;
import java.util.Arrays;


class Solution {
    public int[] solution(int brown, int yellow) {
       int[] answer = new int[2];
        
        // 노랑의 홀짝 체크
        // 노랑이 홀수라면 소수인지 확인한다?
        // 소수가 홀수라면 가로,세로는 (그수 +2 , 3)
        // 소수가 아닌 홀수 라면 3x3 = 9 같은수 혹은 짝수일경우 구하는 연산 시작
        
        boolean isSqurtNumber = false;
        
        if(yellow/2 != 0){
            for (int i = 2; i <= Math.sqrt(yellow); i++) {
                if (yellow % i == 0) {
                    isSqurtNumber = true;
                }
            }
        }
        
        if(isSqurtNumber == false){
            answer[0] = yellow + 2;
            answer[1] = 3;
            return answer;
        }

        
        // 짝수 혹은 9 같은 나눠지는 홀수 일경우 연산시작
        for (int j = 1; j <= Math.sqrt(yellow); j++) {
            if (yellow % j == 0) {
                int yellowWidth = yellow / j;
                int brownWidth = yellowWidth + 2;
                int brownHeigh = j + 2;
                int totalBrown = brownWidth * brownHeigh - yellow;
                
                if (totalBrown == brown) {
                    answer[0] = brownWidth;
                    answer[1] = brownHeigh;
                    break;
                }
            }
        }
        return answer;
    }
}