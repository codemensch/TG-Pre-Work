const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");

/*If we need to end a loop before the loop has completely finished, we can use the
break keyword. Placing a break statement in the loop, we can tell the program
to break from the loop based on a conditional statement for example, see above.*/
