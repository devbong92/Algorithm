function solution(topping) {
    // 왼쪽에서부터의 토핑 종류 수를 추적하는 배열
    let leftToppingCount = new Array(topping.length).fill(0);
    // 오른쪽에서부터의 토핑 종류 수를 추적하는 배열
    let rightToppingCount = new Array(topping.length).fill(0);
    // 왼쪽 집합: 왼쪽에서부터 토핑 종류를 추적
    let leftSet = new Set();
    for (let i = 0; i < topping.length; i++) {
        leftSet.add(topping[i]);
        leftToppingCount[i] = leftSet.size;
    }
    // 오른쪽 집합: 오른쪽에서부터 토핑 종류를 추적
    let rightSet = new Set();
    for (let i = topping.length - 1; i >= 0; i--) {
        rightSet.add(topping[i]);
        rightToppingCount[i] = rightSet.size;
    }
    // 공평하게 자를 수 있는 지점의 수를 셈
   let result = 0;
    for (let i = 0; i < topping.length - 1; i++) {
        if (leftToppingCount[i] === rightToppingCount[i + 1]) {
            result++;
        }
    }
    return result;
}