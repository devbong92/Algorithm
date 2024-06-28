function solution(arr) {
    var answer = 0;
    arr.forEach(i => answer += i);
    answer = answer / arr.length;
    return answer;
}