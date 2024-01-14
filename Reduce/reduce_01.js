//The reduce() function's first 2 parameters are a function reducer() and an arbitrary initialValue.
//JavaScript then calls the reducer() on each element of the array with the accumulator value as the first parameter.
//The accumulator starts as initialValue, and then JavaScript uses the return value of each reduce() call as the new accumulator.

//calculating the sum using loop
function sum(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}
sum([1, 3, 5, 7]); // 16

//calculating the sum using REDUCE method

function sum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

sum([1, 3, 5, 7]); // 16
