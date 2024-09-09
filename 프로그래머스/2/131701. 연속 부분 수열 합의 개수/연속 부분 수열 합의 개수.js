function solution(elements) {
    const res = new Set();
    const length = elements.length
    
    for(let i = 0; i < length; i++ ){
        let sum = 0;
        for(let j=i; j < i + length; j++){
            sum += elements[j % length];
            res.add(sum);
        }
    }
    
    return res.size;
}