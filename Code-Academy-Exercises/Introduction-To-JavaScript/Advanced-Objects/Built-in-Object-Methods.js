const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/*All objects have built-in methods as well. Object.keys() lists all of an object's keys
in an array. Object.entries() lists all of an object's keys and their associated values in
an array and then places each key-value array in a larger array. The Object.assign()
method creates a new object with all of the original object's properties, and takes an optional
parameter to accept any new additional properties.*/
