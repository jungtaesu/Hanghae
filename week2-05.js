function solution(arr, num) {
    let arr1 = ["abce", "cdx", "abcd"]
    let num1 = 1;

    arr1.sort((a,b, index) => {
        if(a < b) {
            console.log("a:", a, "b:", b)
            return a.slice(num1, num1 + 1).charCodeAt() - b.slice(num1, num1+1).charCodeAt()
        }
    })

    // console.log('arr1 sort', arr1)

    

    // console.log('arr2 sort', arr1)

}

solution()