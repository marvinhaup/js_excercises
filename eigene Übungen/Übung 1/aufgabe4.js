let greg = new Object();
greg.name = "Greg";
greg.age = 25;
greg.greet = function(){
		console.log("Hello, there!"); 
}

let ben = {
    name: "Ben",
    age: 18,
    greet: function(){
        console.log("Servus");
    }
}

delete greg.name;
delete ben.age;

console.log(greg);
console.log(ben);