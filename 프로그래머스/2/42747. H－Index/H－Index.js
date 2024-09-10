function solution(citations) {
    
    citations = citations.sort((a,b) => b-a);
    let n = citations.length;
    let h = 0;
    
    for(let i = 0; i < n; i++){
        if(citations[i] > i){
            h++;
        }
    }
    
    
    return h;
}