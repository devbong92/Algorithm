function solution(array) {
    let m = array.reduce((a,b) => Math.max(a,b), -Infinity);
    let answer = [m, array.indexOf(m)];
    
    return answer;
}