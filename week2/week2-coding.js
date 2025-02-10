function solution(arr, num) {

    let arr1= ["sun", "bed", "car"];
    let arr2= ["abce", "abcd", "cdx"];
    let arr3 = [];
    //같은 값 있는 확인

    // console.log('arr3:', arr3)
    // console.log(arr3.length)

    const testSet = new Set(arr3);
    console.log('testSet:', testSet.size)
    
    arr.sort((a,b) => {
        if(a < b && a.slice(num, num + 1).charCodeAt() == b.slice(num, num+1).charCodeAt()) {
            console.log('a:', a)
            return -1;
        }

        return a.slice(num, num + 1).charCodeAt() - b.slice(num, num+1).charCodeAt()
    })

    // arr.sort((a,b) => {
    //     return a.localeCompare(b)
    // })

    //같은 값이 있을 때만.
    // if(arr3.length !== testSet.size) arr.sort()

    // arr.sort()

    console.log('arr:', arr)

    return arr;
    
}

// solution(["sun", "bed", "car"], 1)
// solution(["abce", "abcd", "cdx"], 2)
solution(["abce", "abcd", "cdx","sun", "bed", "car"], 1)
// solution(['1','2','3','4','5'],0 )