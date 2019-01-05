const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/*Privacy is the idea that only certain properties in objects should be able to be
changed. Because JavaScript does not have built in privacy features, there are
naming conventions that show developers that certain properties shouldn't be altered.
In this exercise we learned about the underscore convention. When underscores
are placed in front of properties, those properties ashouldn't be mutated. They still
can be mutated, but there can be unintended consequences in the program.*/
