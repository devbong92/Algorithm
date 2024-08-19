const says = ["aya", "ye", "woo", "ma"];
function solution(babbling) {
    let answer = 0;
    babbling.forEach(e => {
       if(says.indexOf(e) > -1){
           answer++;  
       }else if(e.length >= 4){
           let leng = 0; 
           for(say of says){
               if( e.includes(say.repeat(2)) ) break;
               let splitLen = e.split(say).length;
               if( splitLen > 1){
                   leng += (say.length * (splitLen-1));
                   if(leng === e.length) answer++;
               }
           }
       }
    });
    return answer;
}