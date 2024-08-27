// Time Out 
// function solution(players, callings) {
//     let answer = players;
//     callings.forEach((e,i) => {
       
//         let idx = answer.indexOf(e);
        
//         let tmp = answer[idx-1];
//         answer[idx-1] = answer[idx];
//         answer[idx] = tmp;
        
//     });
//     return answer;
// }

function solution(players, callings) {
    let answer = players;
    const map = new Map();
    
    players.forEach((e,i) => {
        map.set(e,i);
    });
    
    callings.forEach(e => {
        let idx = map.get(e);
        let tmp = answer[idx-1];
        answer[idx-1] = answer[idx];
        answer[idx] = tmp;
        map.set(e,idx-1);
        map.set(tmp,idx);
    });
    return answer;
}