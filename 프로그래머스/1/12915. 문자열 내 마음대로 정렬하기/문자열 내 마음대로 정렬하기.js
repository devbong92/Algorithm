function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a,b) => a.split('')[n].localeCompare(b.split('')[n]) || a.localeCompare(b) );
    return answer;
}

// function solution(strings, n){
//     let arr = new Array();

//     for(const str of strings){
//         const key = str.slice(n,n+1);
//         arr.push(key+str);
//     }
//     arr = arr.sort() ;
//     for(let i = 0; i < arr.length; i++ ){
//         arr[i] = arr[i].slice(1,arr[i].length);
//     }
//     return arr ;
// }