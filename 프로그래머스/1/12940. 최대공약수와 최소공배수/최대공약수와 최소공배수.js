function solution(n, m) {
    let answer = [];
    let gcd = getGcd(Math.min(n,m),Math.max(n,m));
    answer = [ gcd, (n*m)/gcd ];
    return answer;
}

function getGcd(min,max){
    let gcd = 1;
    for(let i = 2; i <= min; i++){
        if(min % i === 0 && max % i === 0){
            gcd = i;
        }
    }
    return gcd;
}