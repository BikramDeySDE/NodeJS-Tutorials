// Module
console.log("This is Custom Module");

// Function
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    let avg = sum/arr.length;
    return avg;
}

// exporting
module.exports = average;
