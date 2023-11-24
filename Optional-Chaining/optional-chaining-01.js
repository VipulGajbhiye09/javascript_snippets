const people = [
  {
    name: 'mike',
    location: { street: '17 Main street', timezone: { offset: '+2:00' }  },
  },
  { 
    name: 'jason',
   location: { street: '42 Filo street' } },
  {
    name: 'sarah',
    location: { street: '4 Brie street', timezone:{ offset: '+9:30' } },
  },
];


console.log(people.name);
console.log(people.location);
console.log(people.location.street);

//optional chaining
console.log(people?.location);
console.log(people?.location?.timezone);
console.log(person?.location?.timezone?.offset);
