let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat (){
    console.log(retreatMessage);
  },
  takeOff (){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

/*Methods are functions that are associated with objects. To define a method, we
declare a key identifier followed by a function declaration as the value. In ES6,
the colon is not necessary as well as the function keyword. To invoke the method,
we use dot notation following the object name as seen above.*/
