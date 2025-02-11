new Promise(function(resolve){
    setTimeout(function(){
        var name = '에스프레소';
        console.log(name);
        resolve(name);
    }, 500)
}).then(function(prevName) {
    //이 안에서도 새로운 Promise!
    return new Promise(function(resolve){
        setTimeout(function(){
            var name =  prevName + '아메리카노노';
            console.log(name);
            resolve(name);
        }, 500)
    })
}).then(function(prevName) {
    //이 안에서도 새로운 Promise!
    return new Promise(function(resolve){
        setTimeout(function(){
            var name =  prevName + '카페모카';
            console.log(name);
            resolve(name);
        }, 500)
    })
}).then(function(prevName) {
    //이 안에서도 새로운 Promise!
    return new Promise(function(resolve){
        setTimeout(function(){
            var name =  prevName + '카페라테';
            console.log(name);
            resolve(name);
        }, 500)
    })
})