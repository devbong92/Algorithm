function solution(nums) {
    let answer = 0;
    let nSet = new Set();
    
    for(let a = 0; a < nums.length; a++){
        for(let b = a+1; b < nums.length; b++){
            for(let c = b+1; c < nums.length; c++){
                if(   nums[a] !== nums[b] 
                   && nums[a] !== nums[c] 
                   && nums[b] !== nums[c] 
                  ){
                    let sum = nums[a] + nums[b] + nums[c];   
                    // nSet.add(sum);
                    if(isPrime(sum)) answer++;  
                }
            }   
        }
    }
    
    
    for(const num of nSet){
        if(isPrime(num)){
            answer++;  
        } 
    }
    
    return answer;
}

function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0 ) return false;
    }
    return true;
}