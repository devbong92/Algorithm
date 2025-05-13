import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String result = "";
        
        for(char m : a.toCharArray()){
            if (Character.isUpperCase(m) ){
                result += Character.toLowerCase(m);
            }else{
                result += Character.toUpperCase(m);
            }
        }
        
        
        System.out.println(result);
        
    }
}