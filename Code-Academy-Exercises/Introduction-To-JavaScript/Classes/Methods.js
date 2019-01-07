class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name (){
    return this._name;
  }

  get department(){
    return this._department
  }

  get remainingVacationDays(){
    return this._remainingVacationDays
  }
  
  takeVacationDays (daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*When adding methods to classes, the syntax is the same as for objects (function
identifier, function declaration, no colon or function keyword required), but commas
are not allowed for separating methods.*/
