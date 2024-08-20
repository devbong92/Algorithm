function solution(str){
    let isOpen = false;
    let cnt = 0 ; 
    let tmp = "";
    for(s of str){
        
        if(s === '('){
            isOpen = true;
            cnt++;
        }else if(s === ')'){
            if(!isOpen) return false;
            if(isOpen && cnt == 1) isOpen = false;
            cnt--;
        }
        
    }
    if(cnt > 0 && !isOpen) return false;
    return !isOpen;
}