
//변수에 함수를 할당
// const sayHello = function hello() {
//     console.log('hello')
// }

//함수를 인자로 다른 함수에 전달가능.
//callback 함수이다. : 매개변수로서 쓰이는 함수
//고차 함수수 : 함수를 인자로 받거나 return 하는 함수
function callFunc(func) {
    func();
}

const sayHello = function hello() {
    console.log('hello')
}

callFunc(sayHello)

function create(num) {
    return function(x) {
        return x + num;
    }
}

const addFive = create(6);

console.log(addFive(11))