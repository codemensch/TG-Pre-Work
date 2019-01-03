let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = greenObj => {
  greenObj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = remoteObj => {
  remoteObj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

/*Unlike other primitive data types in JavaScript, objects are passed by
reference when are used as arguments in functions. This means that when an object
is passed as an argument, the variable referencing the object is just that, a
reference to the actual location of the object in memory, so changes to the object
are reflected in the original scope of the object. This also means that since the
parameter argument is only referencing the location in memory, is has no
knowledge of the original variable name, which is why objects cant be re-assigned
be reference. */
