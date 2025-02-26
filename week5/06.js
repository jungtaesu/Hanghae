const x= 1;

function outerFunc () {
    const x = 102;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

outerFunc()