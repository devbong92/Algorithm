using System;

public class Solution {
    public string solution(string my_string, int n) {
        string answer = "";
        
        for(int s = 0; s < my_string.Length; s++)
        {
            for(int i = 0; i < n; i++)
            {
                answer += my_string[s];
            }
        }
        
        return answer;
    }
}