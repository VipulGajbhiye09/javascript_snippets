//In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators 
// (such as && and ||) to perform conditional evaluations in a concise way.

-The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

const x = 0;
const y = 1;

console.log(x && y);  // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x);  // Output: 0 (the second operand is falsy, so it is returned)

