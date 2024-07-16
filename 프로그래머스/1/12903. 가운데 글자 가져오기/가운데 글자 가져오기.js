function solution(s) {
    var answer = s.length % 2 === 0 ? s.substr(parseInt(s.length / 2 )-1 , 2) : s.substr(parseInt(s.length / 2 ) , 1) ;
    return answer;
}