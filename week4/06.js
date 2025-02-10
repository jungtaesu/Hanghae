var obj = {
    vals: [1,2,3],
    logValues : function (v,i) {
        if(this === global) {
            console.log('this is global')
        } else {
            console.log(this, v, i);
        }

    }
}

//method로서 호출
// obj.logValues(1,2)

var arr = [4,5,6]
//메서드로서 호출했을때 객체(obj)바인딩이 되는거다
//인자로 들어갔을때는 전역객체를 this로 본다.
arr.forEach(obj.logValues)

