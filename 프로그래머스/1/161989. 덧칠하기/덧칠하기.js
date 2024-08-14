/*
    n : 벽 길이
    m : 롤러 크기
    section : 칠해야하는 구역
*/
function solution(n, m, section) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        if(section.indexOf(i) > -1){
            answer ++;
            i += m-1;
        } 
    }
    return answer;
}