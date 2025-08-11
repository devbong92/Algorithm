function solution(my_string, n) {
    var answer = '';
    
    for(let s = 0; s < my_string.length; s++)
    {
        for(let i = 0; i < n; i++)
        {
            answer += my_string[s];
        }
    }
    
    return answer;
}