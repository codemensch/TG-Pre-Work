const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch (error){
    console.log(error);
  }
};

/*Added our fetch request and it's second argument, an object with method and body
properties. Request and error handling are placed within a try...catch statement.
await used to continue program until request has finished.*/
