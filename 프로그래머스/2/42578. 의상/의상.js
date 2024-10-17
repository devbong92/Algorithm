function solution(clothes) {
    let answer = 1;
    let countByCategory = {};
    for(let i = 0; i < clothes.length; i++ ){
        countByCategory[clothes[i][1]] = (countByCategory[clothes[i][1]] || 0 )+1;
    }
    
    for(key in countByCategory){
        answer *= (countByCategory[key] + 1) ;
    }
    return answer - 1;
}