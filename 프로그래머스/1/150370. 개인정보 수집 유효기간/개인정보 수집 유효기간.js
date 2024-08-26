/*
    모든 달은 28일까지 있다고 가정합니다
*/
function solution(today, terms, privacies) {
    const answer = [];
    let idx = 1;
    for(const pri of privacies){
        const p = pri.split(" ");
        for(const term of terms){
            const t = term.split(" ");
            if (t[0] === p[1]){
                let checkDay = new Date(p[0]);
                checkDay.setMonth(checkDay.getMonth() + Number(t[1]));
                if(new Date(today) >= checkDay){
                    answer.push(idx);
                }
            }
        }
        idx++;
    }
    return answer;
}