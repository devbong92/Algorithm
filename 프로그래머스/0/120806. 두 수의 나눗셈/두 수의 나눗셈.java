class Solution {
    public int solution(int num1, int num2) {
        int answer = 0;
        boolean check = false;
        
        if ( 0 < num1 && num1 <= 100 && 0 < num2 && num2 <= 100) check = true;
        
        if ( check ){
            float tmp = (float)num1 / (float)num2 * (float)1000 ;
            answer = (int)tmp;
        }
        
        return answer;
    }
}