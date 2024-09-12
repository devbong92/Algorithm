function solution(arr1, arr2) {
    const answer = new Array(arr1.length);
    for(let i = 0; i < answer.length; i++){
        answer[i] = new Array(arr2[0].length);
    }

    for(let i = 0; i < arr1.length ; i++ ){
        
        for(let j = 0; j < arr2[0].length; j++ ){
            let res = 0;
            for(let n = 0; n < arr1[0].length; n++ ){
                res  += arr1[i][n] * arr2[n][j];
            }
            answer[i][j] = res;
        }
    }
    
    return answer;
}