function solution(my_string) {
    var answer = 0;
    my_string.split('').forEach(e => { if(Number.isInteger(Number(e))) answer += Number(e); });
    return answer;
}