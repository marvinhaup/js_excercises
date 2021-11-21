//"use strict"; // Error: TypeError: Cannot add property Hobby, object is not extensible

let greg = new Object();
greg.name = "Greg";
greg.age = 25;
greg.greet = function(){
		console.log("Hello, there!"); 
}

Object.seal(greg);

greg.Hobby = "Fahrrad fahren";