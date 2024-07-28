const numberStr = ["zero","one","two","three","four","five","six","seven","eight","nine"];

function solution(s) {
    let answer = '';
    numberStr.forEach((e,i)=> {
       if(s.indexOf(e) >= 0){
           let reg = new RegExp(`${e}`,'g');
           s = s.replace(reg,i);
       } 
    });
    answer = Number(s);
    return answer;
}