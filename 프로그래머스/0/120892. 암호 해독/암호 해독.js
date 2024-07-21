function solution(cipher, code) {
    var answer = '';
    cipher.split('').forEach((e,i) => {
        if( (i+1) % code == 0 ) answer += e;
    });
    return answer;
}