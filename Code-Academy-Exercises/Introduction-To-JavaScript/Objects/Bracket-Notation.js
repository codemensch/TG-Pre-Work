let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

/*Object bracket notation is used when a property's name has special characters,
numbers, or spaces. Bracket notation can also be used with variables that point
to the key, dot notation can not do this.*/
