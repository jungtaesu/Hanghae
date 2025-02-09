var func = function(a,b,c,) {
    console.log(this, a,b,c)
}

func(1,2,3)

var bindFunc = func.bind({x:1})

bindFunc(5,6,7)

var bindFunc2 = func.bind({x:1}, 4, 5);

bindFunc2(1)