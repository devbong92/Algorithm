function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a,b) => a.split('')[n].localeCompare(b.split('')[n]) || a.localeCompare(b) );
    return answer;
}