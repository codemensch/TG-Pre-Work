function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);//Returns a reference error

/* Block scope is when a variable is defined within curly braces, a block.
That variable is only accessible by code in that block. We get a reference
error if code tries to access a variable from outside a code block. */
