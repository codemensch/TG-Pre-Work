function monitorCount(rows, columns){
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

/*Sometimes its easier to manage and read smaller functions/tasks and use them
within other function/tasks. A function iside a function is sometimes called a
helper function. Thus, return values can be passed from helper functions to the outer function
as a return value.*/
