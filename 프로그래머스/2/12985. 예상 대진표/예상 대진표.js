let answer = 1;
function solution(n,a,b)
{
    if( (a % 2 === 0 && a-1 === b ) ||
        (a % 2 !== 0 && a+1 === b )
      ){
        return answer;
    }
    
    if(a % 2 === 0 ) a = a/2;
    else a = (a+1)/2;
        
    if(b % 2 === 0 ) b = b/2;
    else b = (b+1)/2;
 
    answer++;
    solution(n/2,a,b);

    return answer;
}