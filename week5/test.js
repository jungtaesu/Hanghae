

function outer () {
    let a = 0;

    return function inner () {
        a;
        console.log(a);
    }
}

const outer1 = outer();
outer1();

