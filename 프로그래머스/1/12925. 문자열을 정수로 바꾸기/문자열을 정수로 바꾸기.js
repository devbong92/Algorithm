function solution(s) {
    let answer = 0;
    let sign = 1;
    let startIndex = 0;
    
    if (s[0] === '-') {
        sign = -1;
        startIndex = 1;
    } else if (s[0] == '+') {
        sign = 1;
        startIndex = 1;
    }
    let j = 0;
    for (let i = s.length - 1 ; i >= startIndex; i--) {
        answer += s[i] * Math.pow(10, j); 
        j++;
    }
    
    return answer * sign;
}

// function solution(s) {
//     var answer = Number(s);
//     return answer;
// }