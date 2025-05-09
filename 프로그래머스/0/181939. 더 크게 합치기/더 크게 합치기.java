class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        if(
            Integer.parseInt(Integer.toString(a)+Integer.toString(b)) 
          < Integer.parseInt(Integer.toString(b)+Integer.toString(a)) 
          )
        {
            answer = Integer.parseInt(Integer.toString(b)+Integer.toString(a));
        }else{
            answer = Integer.parseInt(Integer.toString(a)+Integer.toString(b));
        }
       
        return answer;
    }
}