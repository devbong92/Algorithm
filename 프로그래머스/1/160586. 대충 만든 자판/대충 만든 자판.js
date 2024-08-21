function solution(keymap, targets) {
    var answer = [];
    for(tareget of targets){
        let cnt = countKetmap(keymap,tareget);
        answer.push(cnt);
    }
    return answer;
}

function countKetmap(keymap, str){
    let res = -1; 
    const arr = new Array(str.length);
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < keymap.length; j++){
            let cnt = keymap[j].indexOf(str[i]) +1;
            if(cnt > 0){
                if(arr[i]){
                    arr[i] = Math.min(cnt,arr[i]);
                }else{
                    arr[i] = cnt;
                }
                
            }
                
        }// for j 
        
    }// for i 
    
    if(arr.length !== arr.filter(e => e !== undefined).length) return -1;
    return arr.reduce((a,b) => a+b, 0); 
}

