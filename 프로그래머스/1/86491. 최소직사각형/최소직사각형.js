function solution(sizes) {
    
    let width = 0;
    let height = 0;
    sizes.forEach(e => {
        let w = Math.min(...e);
        let h = Math.max(...e);
        
        width = Math.max(w,width);
        height = Math.max(h,height);
    });
    let answer = width * height;
    return answer;
}