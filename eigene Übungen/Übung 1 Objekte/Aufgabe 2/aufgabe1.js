const receiver = { name: "Max" };
const supplier = { role: "developer", lang: "en" };

let mixin = function(rec, supp, arr){

    for (prop in supp) {
        if (supp.hasOwnProperty(prop)){
            rec[prop] = supp[prop];
        }
    }

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++){
            tmp = arr[i];
            rec[tmp] = null;
        }
    }

}

//let myArr = ["Hobby", "Car", "Music"];

mixin(receiver, supplier);
console.log(receiver); // Object { name: "Max", role: "developer", lang: "en" }