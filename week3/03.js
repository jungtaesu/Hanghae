
const copyObject = (target) => {
    var result= {};

    for (var prop in target) {
        console.log("prop:", prop)
        console.log('target[prop]:', target[prop])
        result[prop] = target[prop];
        console.log("result:", result)
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

var user2 = copyObject(user);

user2.sex.name = 'aaa';

console.log(user.sex.name, user2.sex.name)
