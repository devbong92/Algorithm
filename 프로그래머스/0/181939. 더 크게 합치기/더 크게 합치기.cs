using System;

public class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        int ab = int.Parse(a.ToString() + b.ToString());
        int ba = int.Parse(b.ToString() + a.ToString());
        
        if(ab > ba){
            answer = ab;
        }else{
            answer = ba;
        }
        
        return answer;
    }
}