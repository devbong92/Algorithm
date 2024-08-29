/*
    - 중복된 신고는 1건으로 처리 된다.                  => +1
    - 신고한 아이디가 정지되면 처리 결과 메일을 받음        => +1 
    - 
*/
function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0);
    let distReport = [...new Set(report)];
    const report_list = {};

    for(id of id_list){
        report_list[id] = [];
    }
    
    for(r of distReport){
        const [reporter, accused] = r.split(' ');

        if(report_list[accused].indexOf(reporter) < 0){
            report_list[accused].push(reporter);
        }
    }

    for(reporter in report_list){
        if(report_list[reporter].length >= k){
            for(accused of report_list[reporter]){
                answer[id_list.indexOf(accused)] ++;
            }
        }
        
    }
    
    return answer;
}