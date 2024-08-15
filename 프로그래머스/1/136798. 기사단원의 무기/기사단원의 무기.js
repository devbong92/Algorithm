function solution(number, limit, power) {
    var answer = 0;
    
    for(let n = 1; n <= number; n++){
        let cnt = getDivisor(n)
        answer += cnt > limit ? power : cnt;
    }
    
    return answer;
}


function getDivisor(number){
    const div = new Set();
    for(let i = 1; i <= Math.sqrt(number) ; i++ ){
        if(number % i === 0 ){
            div.add(i);
            if(number / i !== i) div.add(number / i );
        }
    }
    return div.size;
}