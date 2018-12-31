const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

let checkConsistentOutput = (funcParam, valParam) => {
  let one = funcParam(valParam);
  let two = funcParam(valParam);
  if(one === two){
    return one;
  }
  else {
    return 'This function returned inconsistent results';
  }
}

checkConsistentOutput(addTwo, 25);


/*Just like other data types, we can pass functions as arguments or return
as output. When passing as an argument the parentheses are ommited, otherwise the 
function would run and return its output.*/
