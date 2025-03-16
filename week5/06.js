const x= 1;

function outerFunc () {
    const x = 104;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

outerFunc()