const mySet = new Set();

mySet.add('value1');
mySet.add('value2');

console.log(typeof mySet)

for(const value of mySet) {
    console.log(value)
}