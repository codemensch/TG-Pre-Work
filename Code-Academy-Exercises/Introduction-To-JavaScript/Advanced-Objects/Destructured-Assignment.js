const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = robot;
functionality.beep();

/*If we wanted to assign the value of an object's property to a variable with the
same name, we could assign it to the variable using the variable and a reference
to the object and its property (let variable = object.prop). Or we could destructure
the assignment by placing the property's name in curly braces and referencing the
object in which it is defined (let {prop} = object)*/
