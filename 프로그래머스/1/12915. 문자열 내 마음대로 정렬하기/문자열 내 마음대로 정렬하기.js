/*
테스트 1 〉 	통과 (8.69ms, 36MB)
테스트 2 〉 	통과 (470.14ms, 36MB)
테스트 3 〉 	통과 (8.76ms, 35.9MB)
테스트 4 〉	    통과 (470.18ms, 36MB)
테스트 5 〉	    통과 (408.52ms, 36MB)
테스트 6 〉 	통과 (408.08ms, 36.1MB)
테스트 7 〉	    통과 (9.24ms, 36MB)
테스트 8 〉	    통과 (9.21ms, 36.1MB)
테스트 9 〉	    통과 (8.75ms, 36.1MB)
테스트 10 〉	통과 (9.43ms, 36.3MB)
테스트 11 〉	통과 (9.17ms, 35.9MB)
테스트 12 〉	통과 (9.17ms, 36.4MB)
*/
// function solution(strings, n) {
//     let answer = [];
//     answer = strings.sort((a,b) => a.split('')[n].localeCompare(b.split('')[n]) || a.localeCompare(b) );
//     return answer;
// }

/*
테스트 1 〉	    통과 (0.11ms, 33.6MB)
테스트 2 〉	    통과 (0.07ms, 33.6MB)
테스트 3 〉	    통과 (0.21ms, 33.6MB)
테스트 4 〉	    통과 (0.28ms, 33.6MB)
테스트 5 〉	    통과 (0.06ms, 33.5MB)
테스트 6 〉	    통과 (0.30ms, 33.6MB)
테스트 7 〉	    통과 (0.12ms, 33.5MB)
테스트 8 〉	    통과 (0.08ms, 33.6MB)
테스트 9 〉	    통과 (0.07ms, 33.5MB)
테스트 10 〉	통과 (0.27ms, 33.6MB)
테스트 11 〉	통과 (0.07ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.6MB)
*/
function solution(strings, n){
    let arr = new Array();

    for(const str of strings){
        const key = str.slice(n,n+1);
        arr.push(key+str);
    }
    arr = arr.sort() ;
    for(let i = 0; i < arr.length; i++ ){
        arr[i] = arr[i].slice(1,arr[i].length);
    }
    return arr ;
}