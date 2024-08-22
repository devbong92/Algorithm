function solution(s, skip, index) {
    let answer = '';
    const noSkipArr = [...new Array(26)].map((v,i) => String.fromCharCode(i+'a'.charCodeAt())).filter(e => !skip.includes(e));
    
    [...s].forEach(e => {
        if(noSkipArr.includes(e)){
            answer += noSkipArr[(noSkipArr.indexOf(e)+index) % noSkipArr.length];
        }
       
    });
    
    return answer;
}