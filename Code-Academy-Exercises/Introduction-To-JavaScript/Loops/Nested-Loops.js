// Write your code below
let bobsFollowers = ['jill', 'dan', 'lisa', 'cody'];
let tinasFollowers = ['jill', 'dan', 'alex'];
let mutualFollowers = [];

for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

/*If we want to compare the contents of two arrays we can use nested loops. Using a for loop,
each element the outer loop iterates through will be compared to every element of the inner
loop because the inner loop will run completely each cycle the outer loop runs.*/
