const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

/*The first way we exported a module was to declare an object then assign that
object to module.exports. But we can also assign an anonymous set of properties and
methods in an anonymous object to module.exports. Thus we can use require() to assign
this anonymous object to a variable in the same fashion.*/
