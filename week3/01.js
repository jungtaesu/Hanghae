var user = {
    name: 'abc',
    gender: 'man'
}

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
}

var user2 = changeName(user, 'ddd')

console.log(user.name, user2.name)