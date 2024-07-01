function solution(n)
{
    var answer = 0;
    var nList = (n+'').split('');
    nList.forEach(function(v){
        answer += Number(v);
    });
    
    return answer;
}