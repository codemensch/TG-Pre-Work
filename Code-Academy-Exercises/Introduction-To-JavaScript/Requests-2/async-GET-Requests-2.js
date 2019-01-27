const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
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

/*In an async GET request, async allows use of the await keyword, which makes it possible
for the program to continue running while a promise is being resolved. In lieu of writing
a function that handles errors, using try...catch first tries to run the fetch request and
in case of an error, the catch block will run instead.*/
