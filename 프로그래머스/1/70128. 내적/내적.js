function solution(a, b) {
    var answer = 0;
    a.forEach((e,i) => { answer += Number(e*b[i]) });
    return answer;
}