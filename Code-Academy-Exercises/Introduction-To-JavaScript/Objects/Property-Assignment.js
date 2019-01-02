let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship['color'] = 'glorious gold';
spaceship['numEngines'] = 7;
delete spaceship['Secret Mission'];

/*Since objects are mutable, we can change them after they are created. We can
change, add, or delete properties using bracket notation.*/
