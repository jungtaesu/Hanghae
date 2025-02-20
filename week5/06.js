const x= 1;

function outerFunc () {
    const x = 101;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

outerFunc()