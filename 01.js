function solution(s){
    
    var answer;
    

    let pCount = 0;
    let yCount = 0;

    // console.log("s.length:", s.length)
    let text = s.toLowerCase();

    for(let i = 0; i < s.length; i++) {
       if(text.slice(i, i+1) == 'p'){
        console.log("s.slice(i, i+1):", s.slice(i, i+1))
        console.log(i)
        pCount +=1
       }

       if(text.slice(i, i+1) == 'y'){
        yCount +=1

       }
    }
    
    console.log("pCount:", pCount)
    console.log('yCount:', yCount)
    if(pCount == yCount) {
        answer = true
    } else if(pCount == 0 && yCount == 0) {
        answer = true 
    } else {
        answer = false
    }

    console.log("answer:", answer)

    return answer;
}

solution('pPoooyY')
solution('pyY')