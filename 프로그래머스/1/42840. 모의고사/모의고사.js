/*
    1번 : 1,2,3,4,5 반복
    2번 : 2,1 / 2,3 / 2,4 / 2,5 반복 
    3번 : 3,3 / 1,1 / 2,2 / 4,4 / 5,5 반복 ?
*/
function solution(answers) {
    let result = [];
    
    const pattern_1 = [1,2,3,4,5];
    const pattern_2 = [2,1,2,3,2,4,2,5];
    const pattern_3 = [3,3,1,1,2,2,4,4,5,5];
    let cntArr = [0,0,0];
    
    for(let i = 0; i < answers.length ; i++){
       if(pattern_1[i%pattern_1.length] === answers[i]) cntArr[0]+=1;
       if(pattern_2[i%pattern_2.length] === answers[i]) cntArr[1]+=1;
       if(pattern_3[i%pattern_3.length] === answers[i]) cntArr[2]+=1;
    }

    cntArr.forEach((e,i) => {
       if( e === Math.max(...cntArr) ) result.push(i+1);
    });
    
    return result;
}

