// Find - returns single instance (object), returns first match, if no match found - undefined
const people = [
  {
    name: 'mike',
    age: 25,
    position: 'developer',
  },
  {
    name: 'julie',
    age: 21,
    position: 'designer',
  },
  {
    name: 'ellie',
    age: 26,
    position: 'tech lead',
  },
  {
    name: 'johnathan',
    age: 30,
    position: 'manager',
  },
];

const ellie = people.find((person) => person.name === 'ellie');
console.log(ellie);

const randomPerson = people.find((person) => person.age < 30);
console.log(randomPerson);
