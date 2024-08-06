function solution(food) {
    let answer = '';
    food.forEach((e,i) => {
        let share = Math.floor(e/2);
        if(i > 0 && share > 0){
            answer += i.toString().repeat(share);
        }
    });
    answer = answer + "0"+ [...answer].reverse().join('');
    return answer;
}