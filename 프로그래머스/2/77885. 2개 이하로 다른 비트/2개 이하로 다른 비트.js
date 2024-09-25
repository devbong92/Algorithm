function solution(numbers) {
    var answer = [];
    numbers.forEach(e => {
        if(e % 2 === 0 ){
            answer.push(e+1);
        }else{
            let str = '0'+e.toString(2);
            let idx = str.lastIndexOf('0');
            str = str.substring(0,idx) + '10' + str.substring(idx+2);
            answer.push(parseInt(str,2));
        }
        
    })
    return answer;
}