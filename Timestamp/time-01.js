// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);


const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);

// difference between dates
const firstDate = new Date(2023, 10, 13);
const secondDate = new Date(2023, 8, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);
