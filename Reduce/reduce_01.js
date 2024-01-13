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
