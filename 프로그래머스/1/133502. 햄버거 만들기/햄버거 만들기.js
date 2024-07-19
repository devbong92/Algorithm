function solution(ingredient) {
    var answer = 0;
    const pattern = [1, 2, 3, 1];
    
    for(let i = 0; i <= ingredient.length - pattern.length; i++){
        let match = true;
        for(let j = 0; j < 4; j++){
            if(pattern[j] !== ingredient[i + j]) {
                match = false;
                break;
            }
        }
        if(match){
            answer += 1;
            ingredient.splice(i, 4);
            i -= 4;
        }
    }
    
    return answer;
}