function solution(k, score) {
    let answer = [];
    let singer = [];
    for(let i = 0; i < score.length; i++){
        singer.push(score[i]);
        answer.push(Math.min(...singer.sort((a,b) => a-b).reverse().slice(0,k)));
    }
    return answer;
}