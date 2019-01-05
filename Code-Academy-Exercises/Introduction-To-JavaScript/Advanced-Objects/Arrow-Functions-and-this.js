const robot = {
  energyLevel: 100,
  checkEnergy (){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/*Because arrow functions by nature bind a this value to the function, a this
keyword used in a method will then refer to the global object surrounding the calling
object. If the global object doesn't have the property or method referenced, undefined
will be returned.*/
