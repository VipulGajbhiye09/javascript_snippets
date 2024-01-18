// Array from method 
// from - returns Array Object from an object with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const newText = Array.from(text).find((item) => item.textContent === 'person');
console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
  return index
});
