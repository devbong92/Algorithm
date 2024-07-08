function solution(x) {
    var answer = true;
    let sum = 0;
    x.toString().split('').forEach(e => sum += parseInt(e)); 
    if(x % sum !== 0) answer = false;
    return answer;
}