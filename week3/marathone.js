function solution(participant, completion) {
    var answer = '';
    let failureIndex = [];
    let number;
    // console.log(participant)
    

    participant.sort()
    completion.sort()

    for (let i = 0; i < participant.length; i++) {
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    
    console.log(answer)
    return answer;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
// solution()
// solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
// solution(["leo", "kiki", "eden"], 	["eden", "kiki"])