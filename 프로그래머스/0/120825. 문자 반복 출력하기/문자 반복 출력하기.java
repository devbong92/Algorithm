class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        
        for(int s = 0; s < my_string.length(); s++)
        {
            for(int i = 0; i < n; i++)
            {
                answer += my_string.charAt(s);
            }
        }
        
        return answer;
    }
}