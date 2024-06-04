import java.util.*;

class Solution {
    public String solution(String code) {
        String answer = "";
        
        int mode = 0;
        String ret = "";
        
        ArrayList<String> list = new ArrayList<String>(Arrays.asList(code.split("")));
        
        for(int i = 0; i < list.size(); i++){
            String tmp = list.get(i);
            
            if(tmp.equals("1")){
                if(mode < 1){
                    mode = 1;
                }else{
                    mode = 0;
                }
                
            }else{
                if(mode == 0){
                    if(i%2==0){
                        ret += tmp;
                    }
                }else{
                    if(i%2!=0){
                        ret += tmp;
                    }
                }
            }
        }
        
        
        if(ret.equals("")){
            answer = "EMPTY";
        }else{
            answer = ret;
        }
        
        return answer;
    }
}