export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export let meetsSpeedRangeRequirements = (maxSpeed, minSpeed, requiredSpeedRange) => {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange){
    return true;
  }
  else{
    return false;
  }
};

/*Instead of adding one export statement at the end of a program file, we can also
export named variables as they are declared. To do this we simply place the export
keyword before the variable declaration.*/
