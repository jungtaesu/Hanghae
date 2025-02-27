// const makeCalculator = (function(){
//     let number = 0;
//     return function(operator, n) {
//         number = operator(number, n);
//         return number;
//     }
// }());

const makeCalculator = (() => {
    let number = 0;
    console.log('number:',number)
    return function(operator, n) {
        number = operator(number, n);
        console.log('number inside function:',number)
        return number;
    }
})();

function increase(a, b){
  return a + b
}

function multiply(a, b){
  return a * b
}

function decrease(a, b){
  return a - b
}

function divide(a, b){
  return a / b
}

console.log(makeCalculator(increase, 2)) // 2
console.log(makeCalculator(multiply, 6)) // 12
console.log(makeCalculator(divide, 4))   // 3
console.log(makeCalculator(decrease, 7)) // -4