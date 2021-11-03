// Returns a function for creating signed magnitude representations (SMR).
function createSMRFunction (numberOfBits) {
    let myfun = function(num) {
        numlen = ((Math.abs(num.toString(2))).toString()).length;
        if (numlen > (numberOfBits - 1)) {
            console.log("Zu konvertierende Zahl befindet sich außerhalb des Wertebereichs");
            return null;
        }
        else if (num > 0) {
            return "0" + num.toString(2);
        }
        else if (num < 0) {
            return "1" + (num*(-1)).toString(2);
        }
        else {
            return 0;
        }
    }
    return myfun;
}

let numberOfBits = 3;

let SMR = createSMRFunction(numberOfBits);

console.log("Zahl: 3, in binär: " + SMR(3)); // Parameter 5 must be a number between -3 and +3.
console.log("Zahl: 1, in binär: " + SMR(1));
console.log("Zahl: -3, in binär: " + SMR(-3));
console.log("Zahl: -1, in binär: " + SMR(-1));
console.log("Zahl: 5, in binär: " + SMR(5));
console.log("Zahl: 4, in binär: " + SMR(-4));
/*for (let i = 0, n = Math.pow(2, numberOfBits - 1) - 1; i <= n; i++) {
    console.log('+' + i + ' = ' + SMR(i));
    console.log('-' + i + ' = ' + SMR(-i));
}
*/

//console.log('-43 = ' + createSMRFunction(8)(-43));

/*
+0 = 000
-0 = 100
+1 = 001
-1 = 101
+2 = 010
-2 = 110
+3 = 011
-3 = 111
-43 = 10101011
*/