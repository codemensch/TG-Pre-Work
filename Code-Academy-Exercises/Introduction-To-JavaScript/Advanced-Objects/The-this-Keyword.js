const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

/*When referencing other object properties from within the same object you still
need to reference the object that property belongs too. But instead of referencing
with the name of the object, the this keyword will reference the current object.*/
