function solution(want, number, discount) {
    let answer = 0;
    
    for(let i = 0; i < discount.length; i++){
        let discountRange = discount.slice(i,i+10)
        let isSaleCnt = 0;
        for(let k = 0; k < want.length; k ++){

            if(discountRange.filter((e) => e === want[k]).length >= number[k]){
                isSaleCnt ++;
                if(isSaleCnt === want.length){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}