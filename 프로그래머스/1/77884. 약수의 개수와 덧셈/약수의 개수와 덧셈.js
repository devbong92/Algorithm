function solution(left, right) {
    var answer = 0;
    for(left; left <= right ; left ++ ){
        const arr = [];
        for(let i=1; i <= Math.sqrt(left); i++){
            if(left % i === 0){
                arr.push(i);
                if(left / i !== i) arr.push(left / i);
            }
        }
        answer += arr.length % 2 === 0 ? left : -left;
    }
    return answer;
}