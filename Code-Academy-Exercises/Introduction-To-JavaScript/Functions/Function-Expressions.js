const plantNeedsWater = function (day){
  if (day === 'Wednesday'){
    return true;
  }
  else {
    return false;
  }
};

console.log(plantNeedsWater('Tuesday'));

/*A function can also be defined as an expression and saved in a variable. To do
this, a variable is declared with an anonymous function (a function with no 
name) as its value.*/
