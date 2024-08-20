function solution(s) {
    const res = [];
    
    let x_idx = 0;    
    let sameCnt = 0;
    let diffCnt = 0;
    let rest = "";
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[x_idx]){
            sameCnt ++;
        }else{
            diffCnt++;
        }
        
        if( sameCnt === diffCnt ){ 
            let str = s.slice(x_idx, i+1);
            let e_idx = i+1;
            res.push(str);
            rest = s.slice(e_idx) ; 
            x_idx = i+1;
        }
        
    }
    if(res.length === 0){
        res.push(s);
    }else if( res.join('').length < s.length ){
        res.push(rest);
    }
    
    return res.length;
}