// implementing a simplified reduce() function using for loops.

function reduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  for (const val of arr) {
    accumulator = reducer(accumulator, val);
  }
  return accumulator;
}
