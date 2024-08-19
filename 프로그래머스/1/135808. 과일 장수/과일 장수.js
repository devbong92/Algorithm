/* 
    k : 최상품 사과 점수 
    m : 박스 당 사과 개수 
    score : 
*/
function solution(k, m, score) {
    let answer = 0;
    const boxCnt = Math.floor(score.length / m) ; 
    
    score = score.sort((a,b) => b-a);
    for(let i = 0 ; i < score.length; i+=m){
        
        const arr = score.slice(i,i+m);
        if(arr.length === m ){
            answer += Math.min(...arr) * m ;
        }
    }
    return answer;
}