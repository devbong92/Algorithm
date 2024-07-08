function solution(a, b) {
    var answer = 0;
    if(a === b ) return a;
    let min = a; 
    let max = b;
    if(a > b){
        max = a;
        min = b; 
    } 
    
    for(min; min <= max; min++){
        answer += min;
    }
    
    
    return answer;
}