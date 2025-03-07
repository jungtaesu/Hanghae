const x= 1;

function outerFunc () {
    const x = 103;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

outerFunc()