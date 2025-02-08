var user = {
    name: 'abc',
    gender: 'man'
}

var changeName = function(user, newName) {
    //새로운 객체를 반환
    return {
        name: newName,
        gender: user.gender
    }
}

var user2 = changeName(user, 'ddd')

console.log(user.name == user2.name)

console.log(user.name, user2.name)