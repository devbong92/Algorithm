function solution(n) {
    var answer = 0;
    let divisorList = new Set([]);
    for(var i = 0; i <= n ; i++){
        if(n%i===0){
            divisorList.add(i);
        }
    }
    divisorList.forEach(function(v){
       answer += v; 
    });
    return answer;
}
