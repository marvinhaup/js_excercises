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

console.log("\nName der ersten Person: " + greg.name + "\nAlter der ersten Person: " + greg.age + "\n");

console.log("Name der zweiten Person: " + ben["name"] + "\nAlter der zweiten Person: " + ben["age"] + "\n");