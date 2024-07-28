function solution(s, n) {
    var answer = '';
    s.split('').forEach(e => {
 
        let ascii = e.charCodeAt() + n ;
        if( e.charCodeAt() >= 'a'.charCodeAt() 
           && e.charCodeAt() <= 'z'.charCodeAt() 
           && ascii > 'z'.charCodeAt() ){
            ascii = 'a'.charCodeAt()-1 + ascii - 'z'.charCodeAt() ;
        }else if ( e.charCodeAt() >= 'A'.charCodeAt() 
           && e.charCodeAt() <= 'Z'.charCodeAt() 
           && ascii > 'Z'.charCodeAt() ){
            ascii = 'A'.charCodeAt()-1 + ascii - 'Z'.charCodeAt() ;
        } 
        
        console.log(ascii); 
        answer += e === ' ' ? ' ' : String.fromCharCode(ascii);
    });
    return answer;
}