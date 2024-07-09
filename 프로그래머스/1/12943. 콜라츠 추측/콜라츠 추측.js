var answer = 0;
function solution(num) {
    if(num === 1 ) return 0;
    
    answer++;
    if(num % 2 == 0){
        num = num / 2 ;
    }else{
        num = (num * 3) + 1;
    }

    if(answer > 500){
        return -1;
    }else if(num == 1){
        return answer;
    }else{
        return solution(num);
    }
}