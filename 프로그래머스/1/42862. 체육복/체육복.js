/*
    n : 전체 학생
    lost : 체육복을 도난당한 학생 번호
    reserve : 여별의 체육복이 있는 학생 번호
    * 학생들의 번호는 체격 순으로 매겨져 있어, 
    * 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다
    
    > 체육수업을 들을 수 있는 학생의 최댓값을 return
*/
function solution(n, lost, reserve) {
    let answer = 0;
    const vReserve = reserve.sort((a,b) => a-b);
    const clear = new Set();
    
    vReserve.forEach(e => {

        if(lost.indexOf(e) > -1){
            clear.add(e);
        }else if(lost.indexOf(e-1) > -1 && !clear.has(e-1) ) {
            clear.add(e-1);
        }else if(lost.indexOf(e+1) > -1 ){
            clear.add(e+1);
        }
    });
    answer = n - (lost.length - clear.size);
    
    return answer;
}


