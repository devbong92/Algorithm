function solution(arr) {
    var answer = answer = arr.filter( (i) =>  i !== Math.min(...arr)  );
    return answer.length > 0 ? answer : [-1];
}