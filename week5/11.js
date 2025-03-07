// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase());
// num = 100; // 치명적인 단점이 있어요.
console.log(increase());
console.log(increase());


//보완해야할 사항 -> 
// 1. count 상태 -> increase 함수 호출 전까지는 변경되면 안됨.
//2. 이를 위ㅐㅎ count 상태는 increase 함수만이 변경할수 있어야함.
//전역변수가 문제다. 스코프가 전역이다. 모두가 다 접근가능. -> 지역변수?