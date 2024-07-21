function solution(my_string) {
    let answer = '';
    let vowel = ["a","e","i","o","u"];

   answer = my_string.split('').map((e) => {
       if(vowel.filter(v => v === e).length > 0){
           return '';
       }else{
           return e;
       }
    }).join('');
    
    return answer;
}