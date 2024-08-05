function solution(s) {
    let answer = [];
    s.split('').forEach((e,i) => {
        answer.push(s.substring(0,i).lastIndexOf(e) > -1 ? i - s.substring(0,i).lastIndexOf(e) : -1) ;
    
    });
    return answer;
}