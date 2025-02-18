class Car {
    constructor(name, year, type, price) {
        this.name = name;
        this.year = year;
        this.type = type;
        this.price = price;
    }
    makeNoise() {
        // console.log('clarck sound!!' + this.name);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get type () {
        return this._type
    }
    set type(value) {
        this._type = value;
    }

    get price () {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

}

const car1 = new Car('a', '2001', '1', 100);

const car2 = new Car('b', '2002', '2', 200);
const car3 = new Car('c', '2003', '3', 300);

console.log(car1.name)
console.log(car2.name)

car1.name = 'aadaada'
console.log(car1.name)
car1.makeNoise()
car2.makeNoise()
car3.makeNoise()