// 문자열 number의 순서를 바꿀 수 없다.
// + TESTCASE number: "9876543214",4 => "987654"
function solution(number, k) {
    let answer = '';
    const arr = [];

    for(num of number){
        
        while(arr.length > 0 && k > 0 && arr.at(-1) < num){
            arr.pop();
            k--;
        }
        arr.push(num);
    }
    answer = arr.slice(0,arr.length-k).join('');
    return answer;
}