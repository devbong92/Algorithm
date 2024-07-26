function solution(s) {
    let answer = [];
    let idx = 0;
    s.split('').forEach(e => {
        if(idx % 2 == 0 || idx === 0) {
            answer.push(e.toUpperCase());
        }else{
            answer.push(e.toLowerCase());
        }
        idx++;
        if(e === " ") idx = 0;
    });
    return answer.join('');
}