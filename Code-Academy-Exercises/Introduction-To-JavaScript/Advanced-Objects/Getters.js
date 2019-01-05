const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    }
    else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);

/*Getters are methods that get and return an object's properties and can
also perform actions on those values, returning different values if needed. In getters we can
access the calling object using this.*/
