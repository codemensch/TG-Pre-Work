let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*Non-boolean data types also have boolean "value" to them when checked
in a conditional, called truthy or falsy. Most data types are truthy, but 0,
empty strings ('', ""), null, undefined, and NaN (not a number) are falsy and
will return false when checked in a conditional statement.*/
