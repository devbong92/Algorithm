function solution(my_string) {
    var answer = '';
    my_string.split('').forEach(e => {
        if(e === e.toUpperCase()){
            answer += e.toLowerCase();
        }else{
            answer += e.toUpperCase();
        }
    });
    return answer;
}