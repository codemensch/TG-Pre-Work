let spaceship = {
    crew: {
      captain: {
          name: 'Lily',
          degree: 'Computer Engineering',
          cheerTeam() { console.log('You got this!') }
      },
      'chief officer': {
          name: 'Dan',
          degree: 'Aerospace Engineering',
          agree() { console.log('I agree, captain!') }
      },
      medic: {
          name: 'Clementine',
          degree: 'Physics',
          announce() { console.log(`Jets on!`) }
      },
      translator: {
          name: 'Shauna',
          degree: 'Conservation Science',
          powerFuel() { console.log('The tank is full!') }
      }
    }
};

// Write your code below
for(let role in spaceship.crew){
  console.log(`${role}: ${spaceship.crew[role].name}`);
}

for(let role in spaceship.crew){
  console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`);
}

/*Like arrays, you can iterate through objects, iterating through the properties. To
iterate through, you can use the for..in statement. for..in requires defining a variable
to reference the current property followed be the 'in' keyword followed by the
object to be iterated through.*/
