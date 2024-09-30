function solution(order) {
    let answer = 0;
    const sub = [];
    let idx = 0; 

    for(let i = 1; i <= order.length; i++ ){
        if(i !== order[idx]){
            sub.push(i);
        }else{
            answer++;
            idx++;
        }
         
        while(sub.length !== 0 && sub.at(-1) === order[idx]){
            sub.pop();
            answer++;
            idx++;
        }
        
    }

    
    return answer;
}