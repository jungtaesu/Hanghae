var copyObjectRecursive = function(target) {
    var result = {};
    console.log("target:", target)
    if(typeof target == 'object' && target !== null) {
        for(var prop in target) {
            console.log("prop:", prop)
            result[prop] = copyObjectRecursive(target[prop])
        }
        console.log('result:', result)
    } else {
        result = target;
    }
    return result;
}

var user = {
    name: 'abc',
    gender: 'man',
    sex: {
        name: 'nam',
        number: [1,2,3,4,5]
    }
}

var user2 = copyObjectRecursive(user);

user2.sex.name = 'aaa';

console.log(user.sex.name, user2.sex.name)