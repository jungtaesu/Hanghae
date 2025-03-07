const outer = (function(){
    let num = 5;
    return function () {
       return --num ;
    }
})();

console.log(outer());
console.log(outer());
console.log(outer());
