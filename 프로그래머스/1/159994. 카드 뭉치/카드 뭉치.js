function solution(cards1, cards2, goal) {
    var answer = "No";
    let idx1 = 0;
    let idx2 = 0;
    goal.forEach(e => {
        if(e === cards1[idx1]) idx1 ++;
        else if(e === cards2[idx2]) idx2 ++;
    });
    
    if((idx1+idx2) === goal.length) answer = "Yes";
    return answer;
}