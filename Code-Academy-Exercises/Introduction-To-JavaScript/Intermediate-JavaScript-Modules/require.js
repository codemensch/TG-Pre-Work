const Airplane = require('./1-airplane.js');

let displayAirplane = () => {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/*To use a module located in a different JavaScript file, we load it using the
require() method. require() accepts the URL of the module's location. The module is
loaded and saved to a variable. The module can then be accessed in the program.*/
