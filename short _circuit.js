//In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators 
// (such as && and ||) to perform conditional evaluations in a concise way.

-The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

const x = 0;
const y = 1;

console.log(x && y);  // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x);  // Output: 0 (the second operand is falsy, so it is returned)

-The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".

For example:

const x = 0;
const y = 1;

console.log(x || y); // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(y || x); // Output: 1 (the first operand is truthy, so it is returned)

-Short-circuit evaluation can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met.

//For example:

function displayName(name) {
  return name || 'Unknown';
}

console.log(displayName('Jake'));   // Output: "Jake"
console.log(displayName());         // Output: "Unknown"
