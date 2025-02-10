var newArr = [10, 20, 30].map(function(currentValue, index) {
        console.log(currentValue, index)
        return index + 5;
})

console.log(newArr)