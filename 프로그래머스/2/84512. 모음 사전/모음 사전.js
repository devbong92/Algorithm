function solution(word) {
    let idx = 0;
    const dic = {};
    
    const dfs = (str, len) => {
        if (len > 5) return;

        dic[str] = idx++;

        [..."AEIOU"].forEach((vowel) => {
            dfs(str + vowel, len + 1);
        });
    }
    
    dfs("", 0);

    return dic[word];
}
