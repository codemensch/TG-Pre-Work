class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super (name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

/*To create our child class, we create a new class in the normal fashion and then
 add the extends keyword followed by the parent class name. Then, in the constructor
 of the child class, we pass name as an argument and any additional arguments not
 in the parent class. Also, we begin the body of the constructor with the super keyword
 and a parameter of name. Lastly we add properties and methods specific to the child class.*/
