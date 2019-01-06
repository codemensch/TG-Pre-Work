class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*Since a class is an object template, an instance is a copy of that template but
with unique property values. An instance is created by invoking the new keyword,
followed by the class name and its parameters (properties).*/
