using System;

public class Solution {
    public string solution(string my_string, int[] index_list) {
        string answer = "";
        
        foreach(int idx in index_list)
        {
            answer += my_string.Substring(idx, 1);
        }
        
        return answer;
    }
}