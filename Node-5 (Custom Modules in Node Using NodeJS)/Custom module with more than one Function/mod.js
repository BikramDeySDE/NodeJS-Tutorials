// Custom module
console.log("This is custom module");

// function
function average(arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    let avg = sum/arr.length;
    return avg;
}

// export
module.exports = {
    averageResult : average,
    name : "Bikram", 
    repo :  "GitHub"
}
