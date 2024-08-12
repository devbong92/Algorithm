function solution(s){
    let answer = s.toLowerCase().split('p').length === s.toLowerCase().split('y').length ? true : false;
    return answer;
}