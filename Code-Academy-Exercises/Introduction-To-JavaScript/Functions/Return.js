function monitorCount(rows, columns){
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

/*If a function calculates a value, that valuse will be lost unless it is captured.
To capture a value from a function we use the return keyword. When a function
returns a value it passes the information back to the program as an output that
can be saved for later. When a function returns, the function execution will end. */
