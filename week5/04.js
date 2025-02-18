class Rectangle {
    //_underscore 란 private
    //this에 접근할땐 _
    constructor (width, height) {
        this._height = height;
        this._width = width;
    }

    multiply() {
        console.log(this._height * this._width)
        return this._height * this._width;
    }

    get width () {
        return this._width;
    }

    set width (value) {
        if(value <= 0) {
            console.log('0보다 커야함1')
            return;
        } else if(typeof value !== 'number') {
            console.log('숫자가 아님1')
            return;
        }
        this._width = value;
    }

    get height () {
        return this._height;
    }

    set height (value) {
        if(value <= 0) {
            console.log('0보다 커야함2')
            return;
        } else if(typeof value !== 'number') {
            console.log('숫자가 아님2')
            return;
        }
        this._height = value;
    }

}

const Rectangle1 = new Rectangle(10, 20)
const Rectangle2 = new Rectangle(20, 30)
const Rectangle3 = new Rectangle(50, 40)

Rectangle1.multiply()
Rectangle2.multiply()