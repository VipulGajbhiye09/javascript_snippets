//Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition

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
    age: 26,
    position: 'tech lead',
  },
  {
    name: 'johnathan',
    age: 30,
    position: 'manager',
  },
];
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

const managers = people.filter((item) => item.position === 'manager');
console.log(seniorDevs);
