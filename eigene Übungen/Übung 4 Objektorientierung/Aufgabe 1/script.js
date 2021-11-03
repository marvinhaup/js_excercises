// Returns a function for creating signed magnitude representations (SMR).
function createSMRFunction (numberOfBits) {
    

    return 
}

let numberOfBits = 3;

let SMR = createSMRFunction(numberOfBits);

// console.log(SMR(5)); // Parameter 5 must be a number between -3 and +3.

for (let i = 0, n = Math.pow(2, numberOfBits - 1) - 1; i <= n; i++) {
    console.log('+' + i + ' = ' + SMR(i));
    console.log('-' + i + ' = ' + SMR(-i));
}

console.log('-43 = ' + createSMRFunction(8)(-43));

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