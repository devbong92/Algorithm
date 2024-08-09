function solution(a, b) {
    let answer = '';
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];
    let idx = new Date("2016-"+String(a).padStart(2,"0")+"-"+String(b).padStart(2,"0")).getDay();
    answer = dayNames[idx];
    return answer;
}