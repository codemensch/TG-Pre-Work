const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);
let removeElement = newArr => newArr.pop();
removeElement(concept);
console.log(concept);

/*If an array is mutated within a function it will remain mutated outside the
scope of the function, also known as pass by reference. */
