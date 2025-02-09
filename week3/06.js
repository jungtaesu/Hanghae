
var obj1 = {
	outer: function() {
		console.log(this); // (1) 호출의 주체 obj1이 찍힘
		var innerFunc = function() {
			console.log(this); // (2), (3)
		}

		innerFunc(); // 전역 객체가 this이다.

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();