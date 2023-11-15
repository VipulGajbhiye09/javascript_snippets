// Promises states
// Pending, Rejected, FulFilled
const guess = 2;

const promise = new Promise((resolve, reject) => {
  const random_num = Math.floor(Math.random() * 3)
  console.log(random_num);
  
  if (random_num === guess) {
    resolve('you guessed correctly');
  } else {
    reject('wrong guess');
  }
});

console.log(promise);
