//비효율
var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];
numbers.forEach((number) => {
    if(number > max) {
        max = number
    }
    if(number < min) {
        min = number
    }
});

console.log(max, min);

var number2s = [10, 20, 3, 16, 45];

//효율
var max2 = Math.max.apply(null, number2s)
var max2 = Math.max(...number2s)
var min2 = Math.min(...number2s)

console.log(max2)
console.log(min2)