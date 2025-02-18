class Car {
    constructor(name, year, type, price) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.price = price;
    }
    makeNoise() {
        console.log('clarck sound!!' + this.name);
    }
}

const car1 = new Car('a', '2001', '1', 100);

const car2 = new Car('b', '2002', '2', 200);
const car3 = new Car('c', '2003', '3', 300);

car1.makeNoise()
car2.makeNoise()
car3.makeNoise()