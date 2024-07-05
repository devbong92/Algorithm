function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n) ; 
    answer = sqrt % 1 == 0 ? Math.pow(sqrt+1,2) : -1;
    return answer;
}