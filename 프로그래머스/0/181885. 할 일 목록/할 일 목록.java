import java.util.*;

class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        List<String> arr = new ArrayList<>();
        
        for(int i = 0; i < finished.length; i++ )
        {
            if(!finished[i])
            {
                arr.add(todo_list[i]);    
            }
        }
        String[] answer = {};
        answer = arr.toArray(answer);
        return answer;
    }
}