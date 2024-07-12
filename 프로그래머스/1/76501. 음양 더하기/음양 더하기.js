function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        answer += ( signs[i] ? 1 : -1 ) * absolutes[i];
    }
    return answer;
}