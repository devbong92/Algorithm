function solution(n)
{
    let answer = 0;
    let nList = (n+'').split('');
    nList.forEach(function(v){
        answer += Number(v);
    });
    
    return answer;
}