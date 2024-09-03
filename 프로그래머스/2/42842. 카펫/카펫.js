function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    let col = 3;
    let row = 3; 
    
    for(let i = 3; i < sum; i++){
        if((sum / i) % 1 === 0){
            col = Math.max(col,i);
            row = Math.min((sum / i),i);
            if( (col-2) * (row-2) === yellow ){
                answer = [col,row];
            }
            
        }
    }
    
    return answer;
}