let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff >= requiredStaff){
    return true;
  }
  else {
    return false;
  }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};

/*We can also export select objects by using the export {variable1, variable2} notation.
After giving each chunk of code a variable name, we can specify between the {} which
variable names we want to export separated by commas.*/
