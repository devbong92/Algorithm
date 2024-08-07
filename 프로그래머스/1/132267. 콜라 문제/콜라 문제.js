/**
 빈병 a 를 가져다주면 
 콜라 b병을 준다.
 가지고 있는 빈병 n 
 
**/
function solution(a, b, n) {
    let answer = 0;
    while (n >= a ){
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
    }
    return answer;
}