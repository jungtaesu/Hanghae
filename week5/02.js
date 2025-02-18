//클래스 라는 설계도

class Person {
    //필수요소 두개 name, age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('hello', this.name)
    }

}

//설계도를 통해 실제 사물 만들기
const person1 = new Person('ad', 20);

console.log("person1:", person1)
person1.sayHello()