function solution(numbers) {
    var answer = 45; 
    numbers.forEach((e) => {answer -= e});
    return answer;
}