const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();

/* It is best practice to use global scoped variables as litle as possible
and to use block scope. Block scope makes code more legible, understandable,
easier to maintain, and saves memory. */
