const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/*Other array methods include shift(), unshift(), slice() and indexOf. shift()
removes an element from the beginning of the array. unshift() adds an element
to the beginning of the array and takes an argument. slice() returns a copy of
a part of an array specified by passing one or two integer slice points in the array.
indexOf() returns the index of the first element containing the value passed as an argument,
or -1 if it is not present.*/
