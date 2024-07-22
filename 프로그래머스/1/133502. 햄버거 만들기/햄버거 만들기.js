// function solution(ingredient) {
//     let stk = [];
//     let count = 0;
//     for (let i = 0; i < ingredient.length; i++) {
//         console.log("loop : ",stk);
//         stk.push(ingredient[i]);
        
//         if (
//             stk[stk.length-1] === 1 &&
//             stk[stk.length-2] === 3 &&
//             stk[stk.length-3] === 2 &&
//             stk[stk.length-4] === 1
//         ) {
//             count++;
//             console.log("front : ",stk);
//             stk.splice(-4);
//             console.log("back : ",stk);
//         }
//     }
//     return count;
// }


function solution(ingredient) {
    var answer = 0;
    const pattern = [1, 2, 3, 1];
    
    for(let i = 0; i <= ingredient.length - pattern.length; i++){
        let match = true;
        for(let j = 0; j < pattern.length; j++){
            if(pattern[j] !== ingredient[i + j]) {
                match = false;
                break;
            }
        }
        if(match){
            answer += 1;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }
    
    return answer;
}