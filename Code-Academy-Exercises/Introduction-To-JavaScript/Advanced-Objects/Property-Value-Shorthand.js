function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*If we had many properties to populate an object with, it would get tedious assigning
a parameter with the same name to its corresponding object property. To reduce
redundancy, we can eliminate the parameter name in the property assignment.*/
