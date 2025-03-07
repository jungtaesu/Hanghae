const outer = (function () {
    let num = 0;
    return function () {
        return num++;
    }
})();

console.log(outer());
console.log(outer());
console.log(outer());