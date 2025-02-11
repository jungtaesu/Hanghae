var obj1 = {
    name: "obj1",
    func: function() {
        console.log(this)
        console.log(this.name);
    }
}

// obj1.func(); // obj1

setTimeout(obj1.func.bind(obj1), 100); // undefined