//  The optional chaining (?.) operator accesses an object's property or calls a function.
//  If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

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
console.log(people.location.timezone.offset);

//optional chaining
console.log(people?.location);
console.log(people?.location?.street);
console.log(people?.location?.timezone);
console.log(people?.location?.timezone?.offset);
