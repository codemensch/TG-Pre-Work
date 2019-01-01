const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => {return word.length > 5} ));

/*To see all the types of iterators and what their syntax and requirements are,
you can go to MDN's array reference. The some() and every() method take a callback
function as an argument and return true or false. For some(), if at least one element
returns true for a condition, some() returns true. For every(), if all elements
return true for a condition, it returns true.*/
