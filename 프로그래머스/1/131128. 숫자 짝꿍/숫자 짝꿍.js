function solution(X, Y) {
    let answer = '';
    for(let i = 0; i < 10; i++){
        let x = X.split("").filter(e => Number(e) === i).length;
        let y = Y.split("").filter(e => Number(e) === i).length;
        
        answer += String(i).repeat(Math.min(x,y));
    }
    if(answer === '') return "-1";
    else if(+answer === 0 ) return "0";
    answer = answer.split('').sort((a,b) => b-a).join('');
    return answer;
}