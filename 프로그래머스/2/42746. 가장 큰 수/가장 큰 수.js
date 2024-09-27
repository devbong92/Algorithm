function solution(numbers) {
     numbers.sort(
        (a,b) => 
        { 
            a = a.toString();
            b = b.toString();
            return (b+a)-(a+b) 
        });
    return numbers[0] === 0 ? "0" : numbers.join(''); 
}