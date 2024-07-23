function solution(arr1, arr2) {
    let answer = [];
    
    arr1.forEach((v,i) => {
        let col = [];
        v.forEach((vv,ii) => {
            col.push(vv + arr2[i][ii]);
        });
        answer.push(col);
    });
    return answer;
}