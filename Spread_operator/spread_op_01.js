// The Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
// It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. 
// Syntax:
let variablename = [...value]; 

// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];
 
let arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
