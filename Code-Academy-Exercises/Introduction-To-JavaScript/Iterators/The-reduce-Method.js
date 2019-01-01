const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*The reduce() method returns a single value from an array. reduce() takes a callback
function as an argument and an optional accumulator initialization argument. The
callback function takes two arguments, an accumulator parameter and a currentValue
parameter and sums the accumulator and the current value until all elements have been
iterated and summed. */
