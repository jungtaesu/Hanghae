var func = function (a,b,c) {
    console.log(this, a,b,c)
        }

        func.call({x:1}, 4,5,6,)