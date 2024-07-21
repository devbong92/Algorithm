const ants = [
    5,3,1
];

function solution(hp) {
    var answer = 0;
    for( const ant of ants ){
        if( hp > 0 ) {
            let count = Math.floor(hp/ant);
            answer += count;
            hp -= count * ant;
        }
        
    }
    return answer;
}