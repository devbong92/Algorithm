function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b) => a-b).forEach((e) => {
        if(e % divisor == 0) answer.push(e);
    });
    
    if(answer.length < 1) answer.push(-1);
    return answer;
}