function solution(s) {
    let answer = /^[0-9{4,6}]*$/.test(s);
    
    let strArr = s.split('');
    if(strArr.length !== 4 && strArr.length !== 6) return false;
    for(let str of strArr){
        if(isNaN(str)) return false;
    }
    return answer;
}