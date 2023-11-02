// Map returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const people = [
  {
    name: 'mike',
    age: 25,
    position: 'developer',
  },
  {
    name: 'hulie',
    age: 21,
    position: 'designer',
  },
  {
    name: 'ellie',
    age: 24,
    position: 'tech lead',
  },
  {
    name: 'johnathan',
    age: 30,
    position: 'manager',
  },
];


const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);


//html manipulation
const names = people.map( (person) => `<h2>${person.name}</h2>` );
const result = document.querySelector('#result');

result.innerHTML = names.join('');
