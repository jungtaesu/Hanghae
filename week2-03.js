const myMap = new Map();

myMap.set('key', 'value');

myMap.set('key1', 1)
myMap.set('key2', 2)
myMap.set('key3', 3)

console.log(myMap.keys())
console.log(myMap.values())

for(const key of myMap.keys()) {
    console.log(key)
}

console.log(myMap.size)
console.log(myMap.has('key2'))

console.log(myMap.entries())