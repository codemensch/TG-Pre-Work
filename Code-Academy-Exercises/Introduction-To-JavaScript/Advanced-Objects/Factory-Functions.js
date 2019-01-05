const robotFactory = (model, mobile) =>{
  return{
    model: model,
    mobile: mobile,
    beep(){
    	console.log('Beep Boop');
  	}
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

/*Instead of creating objects individually, we can create a factory function that returns
an object with the required parameters and customize each instance of the object
by passing arguments.*/
