const increase = function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
  
  // 이전 상태값을 유지 못함
  console.log(increase()); //1
  num = 100;
  console.log(increase()); //1
  console.log(increase()); //1

  //지역변수 num은 변경은 방지되었다.
  // increase 함수만이 변경할수 잇었다.