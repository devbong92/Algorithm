function solution(s) {
    let answer = '';
    let arr = s.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(answer.length > 0) answer += ' ';
        answer += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return answer;
}