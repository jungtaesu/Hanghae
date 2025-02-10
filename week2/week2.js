

const name = 'a'
const newAge = 30

const obj = {
    name,
    age: newAge
}

let arr = [1,2,3];

console.log(...arr)

let newArr = [...arr, 4]
console.log(newArr)

let user = {
    age: 30,
    name: 'a'
}

let user2 = { ...user, sex:"남" }

console.log(user2)

function print(a,b,c, ...args) {
    console.log(a,b,c, ...args)
}

print(1,2,3,4,5)