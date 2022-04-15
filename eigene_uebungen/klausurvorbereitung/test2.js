let str1 = "Test";
let str2 = "Tet";

// Promise-Konstruktor mit resolve,reject inhalt
let myPromise = new Promise((resovle, reject) => {
    if (str1 == str2) {
        setTimeout(resovle("übereinstimmung", 3000));
    }
    else {
        setTimeout(reject("keine übereinstimmung", 3000));
    }
})

myPromise.
    then((data) => console.log(data)).
    catch((data) => console.log(data));


// iife

let Paul = (() => {
    let alter = 22;
    function aelter() {
        alter++;
    }
    function juenger() {
        alter--;
    }
    function print() {
        console.log(`Paul ist derzeit: ${alter} Jahre alt`);
    }
    return{
        altern: aelter,
        verjuengen: juenger,
        print: print
    }
})();

Paul.print();
Paul.altern();
Paul.altern();
// Paul.aelter(); illegal
Paul.print();
console.log(Paul.alter);