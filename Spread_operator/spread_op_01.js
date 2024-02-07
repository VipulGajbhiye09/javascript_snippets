// The Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
// It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. 
// Syntax:
let variablename = [...value]; 

// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];
 
let arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// if we want to expand an array into another

// normally we expand like so
let arr = ['a', 'b'];
let arr2 = [arr, 'c', 'd'];
 
console.log(arr2); 
// [ [ 'a', 'b' ], 'c', 'd' ]
// Even though we get the content on one array inside the other one, actually it is an array inside another array which is definitely what we didn’t want.
// If we want the content to be inside a single array we can make use of the spread operator.

// expanding using spread operator
 
let arr = ['a', 'b'];
let arr2 = [...arr, 'c', 'd'];
 
console.log(arr2); 
// [ 'a', 'b', 'c', 'd' ]
