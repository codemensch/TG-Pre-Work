fetch('https://api-to-call.com/endpoint').then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request failed!');
	},
  networkError => {
  	console.log(networkError.message);
	}
).then(jsonResponse => {
  return jsonResponse
});

/*After fetching the response object, fetch() checks the ok parameter of response if
the request was successful (true) and then returns the response object in json format.
If the response fails, the second callback runs and handles the error. A second then()
method runs after the first only if the firsth then() has finished and did not fail.*/
