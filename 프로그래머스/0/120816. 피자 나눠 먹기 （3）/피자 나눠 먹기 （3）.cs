using System;

public class Solution {
    public int solution(int slice, int n) {
        int answer = (int)Math.Ceiling( (double)n / (double)slice );
        return answer;
    }
}