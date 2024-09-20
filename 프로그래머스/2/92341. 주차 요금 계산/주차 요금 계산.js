/**
    fees[0] = 기본 시간(분)
    fees[1] = 기본 요금(원)
    fees[2] = 단위 시간(분)
    fees[3] = 단위 요금(원)

    records의 각 원소는 "시각 차량번호 내역" 형식의 문자열입니다
**/
function solution(fees, records) {
    const map = {};
    
    for(const tmp of records){
        const [ time, number, move ] = tmp.split(' ');
        const [ hour, min ] = time.split(':');
        const minTime = +hour * 60 + +min;
        
        if(!map[number]){
            map[number] = { time: 0, number };
        }
        map[number].move = move;
        
        if(move === 'IN'){
            map[number].inTime = minTime;
        }        
        map[number].time += minTime - map[number].inTime;
    }
    return Object.values(map)
        .sort((a,b) => a.number - b.number)
        .map((v) => {
            if(v.move === 'IN') v.time += 1439 - v.inTime;
            if(v.time < fees[0]) return fees[1];
            return fees[1] + Math.ceil( (v.time - fees[0]) / fees[2] ) * fees[3];
        });
}