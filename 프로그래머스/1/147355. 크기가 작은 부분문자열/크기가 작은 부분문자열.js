function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++){
        let val = t.substring(i,i+p.length) ; 
        if(val.length === p.length && Number(val) <= Number(p)){
            answer++;
        }
    }
    return answer;
}