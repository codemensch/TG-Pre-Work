const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNum => {
  return bigNum / 100
});

/*The .map() method is a lot like the forEach() method in that it iterates
through an array and executes a function on each element. The difference is that
map() creates an entirely new array with the updated values.*/
