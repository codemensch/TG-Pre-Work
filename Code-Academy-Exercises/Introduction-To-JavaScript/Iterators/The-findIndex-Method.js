const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {return animal === 'elephant'});

const startsWithS = animals.findIndex(animal => {return animal[0] === 's'});

/*If we need to find the first element in an array that matches a condition, we can
use the findIndex() method. findIndex() iterates through an array and returns the
index of the first element that returns true for a condition. If no element returns
true, -1 is returned.*/
