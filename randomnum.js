Math.random();         // Generates a random between 0 & 1 (excluding 1 )     

//Program for a dice
var n=Math.random();
n=(n*6);                        //range will become [0,6) with decimals
var num = Math.floor(n) + 1;    //range will be 1 to 6 integers
console.log(num);               