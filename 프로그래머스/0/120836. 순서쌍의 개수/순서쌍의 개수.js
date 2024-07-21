function solution(n) {
    var answer = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i == 0) answer++;
        if(i * i != n && Number.isInteger(n/i)) answer++;
    }
    return answer;
}