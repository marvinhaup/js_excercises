//"use strict"; // Wenn strikt: TypeError: Cannot assign to read only property 'name' of object

let greg = new Object();
greg.name = "Greg";
greg.age = 25;
greg.greet = function(){
		console.log("Hello, there!"); 
}
Object.defineProperty(greg,'name', {
    writable: false
})

greg.name = "Hans";

console.log(greg);