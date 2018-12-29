let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
    case 'first place':
    	console.log('You get the gold medal!');
    	break;
    case 'second place':
    	console.log('You get the silver medal!');
    	break;
    case 'third place':
    	console.log('You get the bronze medal!');
    	break;
  default:
    console.log('No medal awarded.');
    break;
}

/*The switch keyword/statement is used instead of multiple else-if statements
when there are a large number of conditions to check for. The switch statement
consists of the switch keyword followed by the value to be checked followed by
several case statements. Finally, the switch statement ends with a default case
if none of the previous cases match the value in question.*/
