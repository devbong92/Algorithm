function gcd(num1, num2){
   
    if(num1 % num2 === 0 ) 
        return num2;
    
    return gcd(num2, num1 % num2);
}

function lcm(num1, num2){
    return (num1 * num2) / gcd(num1,num2);
}

function solution(arr) {
    let answer = 1;
    
    for(let i = 0; i< arr.length; i++){
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}

