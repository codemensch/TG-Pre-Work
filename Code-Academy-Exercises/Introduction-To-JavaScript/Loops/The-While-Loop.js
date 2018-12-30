const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*If we want a task to repeat until a certain condition is met, we can use the while
loop. The while loop requires a stopping condition within its parentheses. While the
condition remains true, the loop will run and when it becomes false, it will stop. The
variable being tested must be updated within the body of the loop or else an infinite loop
will likely occur.*/
