//콜백 함수

var count = 0;

var Func = function() {
    console.log('count:', count);
    if(count > 4) clearInterval(timer)
}

//만약 
Func();
//이렇게 호출한다면 함수는 한번 호출되고 끝날 것 즉 호출 주체가 나임.
//하지만
var timer = setInterval(Func, 300);
//이렇게 호출한다면 호출 주체는 제어권을 가지고 있는 setInterval 함수이다.