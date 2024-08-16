function solution(lottos, win_nums) {
    var answer = [];
    let realCheck = 0;
    let zeroCheck = 0;

    for(num of lottos){
        if(win_nums.indexOf(num) > -1 && num > 0 ){
            realCheck++ ;
        }else if(num === 0){
            zeroCheck++ ;
        }
    }
    
    answer.push(getRank(realCheck + zeroCheck));
    answer.push(getRank(realCheck));
    
    return answer;
}

function getRank(number){
    let rank = 6;
    
    switch(number) {
        case 6: rank = 1;
                break;
        case 5: rank = 2;
                break;
        case 4: rank = 3;
                break;
        case 3: rank = 4;
                break;
        case 2: rank = 5;
                break;
    }
    
    return rank;
}