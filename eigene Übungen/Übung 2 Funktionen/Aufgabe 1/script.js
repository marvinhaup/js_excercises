function range(start, end, step = 1) {
    let cellValue = Number(start);
    let arrLen = Math.floor((end-start)/step);
    let newArray = new Array(arrLen);
    for (let i = 0; i <= arrLen; i++){
        newArray[i] = Number(cellValue);
        cellValue += Number(step);
    }
    return newArray;
}

function sum(x){
    let sum = Number(0);
    if (Array.isArray(x)) {
        for (let i = 0; i < x.length; i++){
            sum += Number(x[i]);
        }
    }
    else {
        for (let i = 0; i < arguments.length; i++) {
            sum += Number(arguments[i]);
        }
    }
    return sum;
}

console.log(sum(range(1,10)));