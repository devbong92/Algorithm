function solution(n) {
    var answer = parseInt(n.toString().split('').sort().reverse().join(''));
    return answer;
}