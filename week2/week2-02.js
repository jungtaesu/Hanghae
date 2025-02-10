//일급객체로써 함수

const person = {
    name: 'a',
    age: 31,
    isMarried: true,
    sayHello: function() {
        console.log(`hello my name is ~~${this.name}`)
    }
}

person.sayHello()

//배열의 요소로 함수를 할당

const myArr = [
    function (a,b) {
        return a+b;
    } ,
    function (a, b) {
        return a-b;
    }
]

console.log(myArr[1](1,3))

function multiPly(num) {
    return function (x) {
        return x * num
    }
}

function add(x,y) {
    return x+y;
}

const multiPlyByTwo = multiPly(2)
const multiPlyByThree = multiPly(3)

console.log(multiPlyByTwo(5))
console.log(multiPlyByThree(5))