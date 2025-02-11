var addCoffee = function (name) {
    return function(prevName) {
        //이 안에서도 새로운 Promise!
        console.log('firstFuc:', prevName)
        return new Promise(function(resolve){
            setTimeout(function(){
                //
                var newName = prevName ? prevName + name : name;
                console.log(newName);
                resolve(newName);
            }, 500)
        })
    }
}

var addCoffeeArrowVersion = (name) => {
    return function(prevName) {
        //이 안에서도 새로운 Promise!
        console.log('firstFuc:', prevName)
        return new Promise(function(resolve){
            setTimeout(function(){
                //
                var newName = prevName ? prevName + name : name;
                console.log(newName);
                resolve(newName);
            }, 500)
        })
    }
}

addCoffee('아메리카노')()
    .then(addCoffee('모르가나'))
    .then(addCoffee('dsadsad'))